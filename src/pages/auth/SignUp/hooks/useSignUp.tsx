import * as React from 'react';
import { axios } from 'config';
import { IUser } from 'services';

interface IUserSignUp extends IUser {
  passwordConfirmation: string;
}

interface ISignUpResponse {
  data: {
    id: string;
    email: string;
  };
}

interface ISignUpErrors {
  email?: string[];
  password?: string[];
  passwordConfirmation?: string[];
}

const useSignUp = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<ISignUpErrors>();

  const fetchSignUp = async (user: IUserSignUp) => {
    setLoading(true);

    const result = axios
      .post<IUserSignUp, ISignUpResponse>('users', { user: user })
      .then(({ data: { id } }: ISignUpResponse) => {
        if (id) return true;
      })
      .catch((errors) => {
        setErrors(errors.response.data.errors);
        return false;
      })
      .finally(() => {
        setLoading(false);
      });

    return result;
  };

  return { fetchSignUp, loading, errors };
};

export default useSignUp;
