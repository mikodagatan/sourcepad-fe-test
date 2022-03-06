import * as React from 'react';
import { axios } from 'config';

import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { LoginMachine, loginMachine, profileState } from 'store';
import { getLocalStorage, setLocalStorage, clearLocalStorage } from 'utils';
import { IUser } from 'services';

import useWhoAmI from 'hooks/useWhoAmI';

interface ILoginResponse {
  data: {
    data: ILoginData;
  };
}

interface ILoginData {
  id: string;
  email: string;
  authToken: string;
  errors: string[];
}

const useAuth = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  const setLogin = useSetRecoilState(loginMachine);
  const resetProfile = useResetRecoilState(profileState);

  const { fetchWhoAmI } = useWhoAmI();

  const fetchLogin = async (user: IUser) => {
    // NOTE: Only able to catch the error using then-catch than catch-await.
    setInitialState();

    if (checkLogin()) return;

    const result = axios
      .post<IUser, ILoginResponse>('signin', { credentials: user })
      .then(async ({ data: { data: payload } }: ILoginResponse) => {
        setAuthStates(payload);
        console.log('login response', payload);

        const whoami = await fetchWhoAmI();
        return { loggedIn: true, profile: whoami };
      })
      .catch((error) => {
        setError(error.response?.statusText);
        return { loggedIn: false, profile: false };
      })
      .finally(() => {
        setLoading(false);
      });

    return result;
  };

  const setInitialState = () => {
    setLoading(true);
    setError(undefined);
  };

  const setAuthStates = (payload: ILoginData) => {
    setLocalStorage('token', payload.authToken);
    setLocalStorage('user', payload.email);
    setLoginState(payload.email);
    console.log('login Auth state', localStorage?.user, localStorage?.token);
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
    resetProfile();
    clearLocalStorage();
    console.log('logout data', localStorage);
  };

  return { fetchLogin, checkLogin, logOut, loading, error };
};

export default useAuth;
