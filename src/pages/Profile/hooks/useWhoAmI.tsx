import * as React from 'react';
import { axiosAuth } from 'config';
import { useSetRecoilState } from 'recoil';

import { profileState } from 'store';

const useWhoAmI = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();
  const setProfileState = useSetRecoilState(profileState);

  const fetchWhoAmI = async () => {
    setLoading(true);

    const whoAmIdata = axiosAuth()
      .get('/whoami')
      .then((response) => {
        if (!response.data.profile) return false;
        setProfileState(response.data.profile);
      })
      .catch((error) => {
        setError(error.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });

    return whoAmIdata;
  };

  return { fetchWhoAmI, loading, error };
};

export default useWhoAmI;
