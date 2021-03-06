import * as React from 'react';
import { axios } from 'config';
import { useSetRecoilState } from 'recoil';

import { loginMachine, profileState } from 'store';
import { setLocalStorage } from 'utils';

const useWhoAmI = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();
  const setProfileState = useSetRecoilState(profileState);
  const setLogin = useSetRecoilState(loginMachine);

  const fetchWhoAmI = async () => {
    setLoading(true);

    const whoAmIdata = axios
      .get('/whoami')
      .then((response) => {
        setLocalStorage('userId', response.data.id);
        setLogin((prev) => {
          return { ...prev, userId: response.data.id };
        });

        if (!response.data.profile.id) return false;
        setProfileState(response.data.profile);

        return true;
      })
      .catch((error) => {
        setError(error.response.data.errors);
        return false;
      })
      .finally(() => {
        setLoading(false);
      });

    return whoAmIdata;
  };
  return { fetchWhoAmI, loading, error };
};

export default useWhoAmI;
