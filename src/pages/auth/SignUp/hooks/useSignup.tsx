import * as React from 'react';
import { axios } from 'config';
import { useSetRecoilState } from 'recoil';
import { setLocalStorage } from 'utils';

interface fetchSignupParams {
  email: string;
  password: string;
}

interface SignupResponse {
  data: {
    data: {
      email: string;
      authToken: string;
      errors: string[];
    };
  };
}

const useSignup = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  return { fetchSignup, loading };
};

export default useSignup;
