import * as React from 'react';
import { axiosAuth } from 'config';
import { IProfile } from 'services';

const useCreateProfile = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>();

  const fetchCreateProfile = async (profile: IProfile) => {
    setLoading(true);

    const result = axiosAuth()
      .post('profiles', { profile: profile })
      .then(({ data: { profile } }) => {
        if (profile) return profile;
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

  return {
    fetchCreateProfile,
    loading,
    errors,
  };
};

export default useCreateProfile;
