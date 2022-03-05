import * as React from 'react';
import { axios } from 'config';

import { useSetRecoilState } from 'recoil';
import { LoginMachine, loginMachine } from 'store';
import { setLocalStorage } from 'utils';
import { IUser } from 'services';

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
  const [error, setError] = React.useState<string>();

  const fetchLogin = async (user: IUser) => {
    // NOTE: Only able to catch the error using then-catch than catch-await.
    setLoading(true);
    setAuthenticated(false);

    axios
      .post<IUser, LoginResponse>('signin', { credentials: user })
      .then(({ data: { data: payload } }: LoginResponse) => {
        setLocalStorage('token', payload.authToken);
        setLogin({
          user: { email: payload.email },
          state: LoginMachine.loggedIn,
        });
        setAuthenticated(true);
      })
      .catch((error) => {
        setError(error.response?.statusText);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { fetchLogin, authenticated, loading, error };
};

export default useLogin;
