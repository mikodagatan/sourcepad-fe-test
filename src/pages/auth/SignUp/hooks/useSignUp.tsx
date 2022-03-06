import * as React from 'react';
import { axios } from 'config';
import { IUser } from 'services';

interface IUserSignUp extends IUser {
  passwordConfirmation: string;
}

interface SignUpResponse {
  id: string;
  email: string;
}

interface ISignUpErrors {
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

const useSignUp = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<ISignUpErrors>();
  const [registered, setRegistered] = React.useState<boolean>(false);

  const fetchSignUp = async (user: IUserSignUp) => {
    setLoading(true);

    axios
      .post<IUserSignUp, SignUpResponse>('users', { user: user })
      .then(({ id }: SignUpResponse) => {
        if (id) setRegistered(true);
      })
      .catch((errors) => {
        console.log(errors.response.data.errors);
        setErrors(errors.response.data.errors);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { fetchSignUp, registered, loading, errors };
};

export default useSignUp;
