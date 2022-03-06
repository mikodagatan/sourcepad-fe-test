import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'react-simple-snackbar';
import { snackbarDefault } from 'config';

import { Input, Button } from 'components';

import { useSetRecoilState, useRecoilState } from 'recoil';
import { profileCreateStep, profileState } from 'store';
import {
  alphaValidation,
  numericValidation,
  minLengthValidation,
  maxLengthValidation,
} from 'utils';

import useCreateProfile from './hooks/useCreateProfile';
import { Profile } from 'pages';
import { useNavigate } from 'react-router';

const Step2 = () => {
  const navigate = useNavigate();
  const setStep = useSetRecoilState(profileCreateStep);
  const [profile, setProfile] = useRecoilState(profileState);
  const [openSnackbar] = useSnackbar(snackbarDefault);
  const { fetchCreateProfile, loading, errors: apiErrors } = useCreateProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    const result = await fetchCreateProfile({ ...profile, ...data });
    if (result) {
      setProfile({ ...data });
      openSnackbar('Profile successfully created');
      navigate('/profile');
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <form>
      <Input
        name="address_1"
        placeholder="Address 1"
        error={errors.address_1?.message}
        register={register({
          required: 'This is a required field',
          minLength: minLengthValidation(4),
          maxLength: maxLengthValidation(100),
        })}
      />
      <Input
        name="address_2"
        placeholder="Address 2"
        error={errors.address_2?.message}
        register={register({
          required: 'This is a required field',
          minLength: minLengthValidation(4),
          maxLength: maxLengthValidation(100),
        })}
      />
      <Input
        name="city"
        placeholder="City"
        error={errors.city?.message}
        register={register({
          required: 'This is a required field',
          pattern: alphaValidation,
          minLength: minLengthValidation(4),
          maxLength: maxLengthValidation(100),
        })}
      />
      <Input
        name="country"
        placeholder="Country"
        error={errors.country?.message}
        register={register({
          required: 'This is a required field',
          pattern: alphaValidation,
        })}
      />
      <Input
        name="zipCode"
        placeholder="Zip code"
        error={errors.zipCode?.message}
        register={register({
          required: 'This is a required field',
          pattern: numericValidation,
          minLength: minLengthValidation(4),
          maxLength: maxLengthValidation(4),
        })}
      />
      <div className="flex justify-between w-full">
        <Button
          className="mt-4 bg-gray-400 hover:bg-gray-500 px-10"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className="mt-4 bg-purple-500 px-10"
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Step2;
