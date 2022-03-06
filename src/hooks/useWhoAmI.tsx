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
        console.log('whoami user id', response.data);
        setLocalStorage('userId', response.data.id);
        setLogin((prev) => {
          return { ...prev, userId: response.data.id };
        });
        console.log('response whoami', response.data);

        if (!response.data.profile.id) return false;
        console.log('changing profile whoami');
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
