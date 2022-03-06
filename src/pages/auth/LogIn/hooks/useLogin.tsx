import * as React from 'react';
import { axios } from 'config';

import { useSetRecoilState } from 'recoil';
import { LoginMachine, loginMachine } from 'store';
import { getLocalStorage, setLocalStorage } from 'utils';
import { IUser } from 'services';

interface ILoginResponse {
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
    setInitialState();

    if (checkLogin()) return;

    axios
      .post<IUser, ILoginResponse>('signin', { credentials: user })
      .then(({ data: { data: payload } }: ILoginResponse) => {
        setLocalStorage('token', payload.authToken);
        setLocalStorage('user', payload.email);
        setLoginState(payload.email);
        setAuthenticated(true);
        console.log('auth', authenticated);
      })
      .catch((error) => {
        setError(error.response?.statusText);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const checkLogin = () => {
    console.log('check login');
    const userEmail = getLocalStorage('user', null);
    const authToken = getLocalStorage('token', null);
    if (userEmail || authToken) {
      setLoginState(userEmail);
      return true;
    }
    return false;
  };

  const setLoginState = (email: string) => {
    setLogin({
      user: { email: email },
      state: LoginMachine.loggedIn,
    });
  };

  const setInitialState = () => {
    setLoading(true);
    setAuthenticated(false);
    setError(undefined);
  };

  return { fetchLogin, checkLogin, authenticated, loading, error };
};

export default useLogin;
