import * as React from 'react';
import { axiosAuth } from 'config';
import { useSetRecoilState } from 'recoil';

import { profileState } from 'store';

interface IWhoAmIResponse {
  id: string;
  email: string;
  profile: IWhoAmIProfile;
}

interface IWhoAmIProfile {
  id?: string;
  firstName: string;
  lastName: string;
}

const useWhoAmI = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();
  const setProfileState = useSetRecoilState(profileState);

  const fetchWhoAmI = async () => {
    setLoading(true);

    const whoAmIdata = axiosAuth()
      .get('/whoami')
      .then((response) => {
        console.log('response', response);
        if (response.data.profile) setProfileState(response.data.profile);
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
