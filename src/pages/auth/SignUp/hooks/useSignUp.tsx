import * as React from 'react';
import { axios } from 'config';
import { useSetRecoilState } from 'recoil';
import { setLocalStorage } from 'utils';
import { IUser } from 'services';

interface IUserSignUp extends IUser {
  passwordConfirmation: string;
}

interface SignUpResponse {
  id: string;
  email: string;
}

const useSignUp = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();
  const [registered, setRegistered] = React.useState<boolean>(false);

  const fetchSignUp = async (user: IUserSignUp) => {
    setLoading(true);

    axios
      .post<IUserSignUp, SignUpResponse>('users', { user: user })
      .then(({ id, email }: SignUpResponse) => {
        if (id) setRegistered(true);
      })
      .catch((error) => {
        setError(error.response?.statusText);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { fetchSignUp, registered, loading, error };
};

export default useSignUp;
