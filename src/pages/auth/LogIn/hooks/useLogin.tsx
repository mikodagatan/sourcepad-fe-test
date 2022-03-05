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
  const [error, setError] = React.useState<string>();

  const fetchLogin = async (user: fetchLoginParams) => {
    // NOTE: Only able to catch the error using then-catch than catch-await.
    setLoading(true);

    axios
      .post<fetchLoginParams, LoginResponse>('signin', { credentials: user })
      .then(({ data: { data: payload } }: LoginResponse) => {
        setLocalStorage('token', payload.authToken);
        setLogin({
          user: { email: payload.email },
          state: LoginMachine.loggedIn,
        });
      })
      .catch((error) => {
        setError(error.response?.statusText);
      })
      .finally(() => {
        setLoading(false);
      });

    return true;
  };
  return { fetchLogin, loading };
};

export default useLogin;
