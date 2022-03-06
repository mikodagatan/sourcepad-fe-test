import * as React from 'react';
import { axios } from 'config';

import { useSetRecoilState } from 'recoil';
import { LoginMachine, loginMachine } from 'store';
import { getLocalStorage, setLocalStorage, clearLocalStorage } from 'utils';
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

const useAuth = () => {
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
        setAuthStates(payload.authToken, payload.email);
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

  const setInitialState = () => {
    setLoading(true);
    setAuthenticated(false);
    setError(undefined);
  };

  const setAuthStates = (authToken: string, email: string) => {
    setLocalStorage('token', JSON.stringify(authToken));
    setLocalStorage('user', JSON.stringify(email));
    setLoginState(email);
  };

  const setLoginState = (email: string) => {
    setLogin({
      user: email,
      state: LoginMachine.loggedIn,
    });
  };

  const checkLogin = () => {
    const userEmail = getLocalStorage('user', null);
    const authToken = getLocalStorage('token', null);
    if (userEmail || authToken) {
      setLoginState(userEmail);
      return true;
    }
    return false;
  };

  const logOut = () => {
    setLogin({
      user: '',
      state: LoginMachine.guest,
    });
    clearLocalStorage();
  };

  return { fetchLogin, checkLogin, logOut, authenticated, loading, error };
};

export default useAuth;
