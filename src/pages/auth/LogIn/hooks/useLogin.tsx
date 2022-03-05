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

  const fetchLogin = async (user: fetchLoginParams) => {
    setLoading(true);

    const response = await axios.post<fetchLoginParams, LoginResponse>(
      'signin',
      { credentials: user }
    );
    console.log(response.data.data);
    setLoading(false);

    const data = response.data?.data;

    if (data && data.errors) return data.errors;

    setLocalStorage('token', data.authToken);
    setLogin({ user: { email: data.email }, state: LoginMachine.loggedIn });
    return true;
  };
  return { fetchLogin, loading };
};

export default useLogin;
