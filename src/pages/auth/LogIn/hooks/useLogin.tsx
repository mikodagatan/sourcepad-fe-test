import * as React from 'react';
import { axios } from 'config';

import { useSetRecoilState } from 'recoil';
import { LoginMachine, loginMachine } from 'store';
import { setLocalStorage } from 'utils';

interface fetchLoginParams {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    data: {
      email: string;
      authToken: string;
      errors: string[];
    };
  };
}

const useLogin = () => {
  const setLogin = useSetRecoilState(loginMachine);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);

  const fetchLogin = async (user: fetchLoginParams) => {
    setLoading(true);
    // NOTE: Wanted to use await, but the responses force me to use then.

    axios
      .post<fetchLoginParams, LoginResponse>('signin', { credentials: user })
      .then(({ data: { data: payload } }: LoginResponse) => {
        setLocalStorage('token', payload.authToken);
        setLogin({
          user: { email: payload.email },
          state: LoginMachine.loggedIn,
        });
        setAuthenticated(true);
      })
      .catch((error) => {
        console.log('error', error);
        setError(error.response.statusText);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { fetchLogin, authenticated, loading, error };
};

export default useLogin;
