import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useSnackbar } from 'react-simple-snackbar';
import { snackbarDefault } from 'config';

import { Input, Button } from 'components';

import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { loginMachine, profileCreateStep, profileState } from 'store';

import useCreateProfile from './hooks/useCreateProfile';
import { useNavigate } from 'react-router';
import { IProfile } from 'services';
import { useCountries } from 'hooks';

import {
  numericValidation,
  minLengthValidation,
  maxLengthValidation,
} from 'utils';

const Step2 = () => {
  const navigate = useNavigate();
  const setStep = useSetRecoilState(profileCreateStep);
  const login = useRecoilValue(loginMachine);
  const [profile, setProfile] = useRecoilState(profileState);
  const [openSnackbar] = useSnackbar(snackbarDefault);
  const { fetchCreateProfile, loading } = useCreateProfile();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', defaultValues: profile });

  const { CountrySelector, CitySelector, selectedCountry, selectedCity } =
    useCountries({ setValue });

  const onSubmit = async (data: IProfile) => {
    const result = await fetchCreateProfile({
      ...profile,
      ...data,
      userId: login.userId,
    });

    if (result) {
      setProfile((prev: IProfile) => {
        return { ...prev, ...data, userId: login.userId };
      });
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
      <input
        type="hidden"
        name="city"
        ref={register({ required: 'This is a required field' })}
        value={selectedCity}
      />
      <CitySelector />
      <input
        type="hidden"
        name="country"
        ref={register({ required: 'This is a required field' })}
        value={selectedCountry}
      />
      <CountrySelector />
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
          className="mt-4 bg-gray-400 hover:bg-gray-500 px-4 md:px-10"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          className="mt-4 bg-purple-500 px-4 md:px-10"
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
