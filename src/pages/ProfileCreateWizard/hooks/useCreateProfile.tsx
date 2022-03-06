import * as React from 'react';
import { axios } from 'config';
import { useSetRecoilState } from 'recoil';
import { profileState } from 'store';
import { IProfile } from 'services';

const useCreateProfile = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>();
  const setProfileState = useSetRecoilState(profileState);

  const fetchCreateProfile = async (profile: IProfile) => {
    setLoading(true);

    const result = axios
      .post('profiles', { profile: profile })
      .then(({ data: profile }) => {
        if (profile.id) {
          setProfileState((prev) => {
            return { ...prev, id: profile.id };
          });
          return true;
        }
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
