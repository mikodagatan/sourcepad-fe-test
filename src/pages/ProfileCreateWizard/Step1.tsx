import { useForm } from 'react-hook-form';

import { Input, Button } from 'components';

import { useSetRecoilState, useRecoilState } from 'recoil';
import { profileCreateStep, profileState } from 'store';
import { alphaValidation, phoneNumberValidation } from 'utils';

const Step1 = () => {
  const setStep = useSetRecoilState(profileCreateStep);
  const [profile, setProfile] = useRecoilState(profileState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange', defaultValues: profile });

  const onSubmit = (data) => {
    setStep((prev) => prev + 1);
    setProfile({ ...profile, ...data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="firstName"
        placeholder="First name"
        error={errors.firstName?.message}
        register={register({
          required: 'This is a required field',
          pattern: alphaValidation,
        })}
      />
      <Input
        name="lastName"
        placeholder="Last name"
        error={errors.lastName?.message}
        register={register({
          required: 'This is a required field',
          pattern: alphaValidation,
        })}
      />
      <Input
        name="phone"
        placeholder="Mobile number (e.g. +63 901 123 1234)"
        error={errors.phone?.message}
        register={register({
          required: 'This is a required field',
          pattern: phoneNumberValidation,
        })}
      />

      <Button className="mt-4 bg-purple-500 w-full">Next</Button>
    </form>
  );
};

export default Step1;
