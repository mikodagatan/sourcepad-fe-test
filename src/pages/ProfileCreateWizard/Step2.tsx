import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Input, Button } from 'components';

import { useSetRecoilState } from 'recoil';
import { profileCreateStep, profileState } from 'store';
import {
  alphaValidation,
  numericValidation,
  minLengthValidation,
  maxLengthValidation,
} from 'utils';

const Step2 = () => {
  const setStep = useSetRecoilState(profileCreateStep);
  const setProfile = useSetRecoilState(profileState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    setStep((prev) => prev + 1);
    setProfile({ ...data });
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
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Step2;
