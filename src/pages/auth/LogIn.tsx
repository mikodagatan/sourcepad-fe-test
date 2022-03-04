import * as React from 'react';

import { useForm } from 'react-hook-form';

import { FormContainer, Input, Button } from 'components';
import { ContainerLayout } from 'layouts';
import { siteName } from '../../constants';
import { emailValidation, passwordValidation } from 'utils';

interface ILoginDetails {
  email: string;
  password: string;
}

const LogIn = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDetails>({
    mode: 'onChange',
  });

  const onSubmit = (data: ILoginDetails) => {};

  return (
    <ContainerLayout className="bg-purple-300">
      <FormContainer className="">
        <div className="flex flex-col p-6">
          <div className="text-[24px] text-center font-bold pb-8">
            {siteName}
          </div>
          <div className="text-center pb-4 text-sm">Welcome! Let's Log in</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              placeholder="cyanide@happiness.com"
              error={errors.email?.message}
              register={register({
                required: true,
                pattern: emailValidation,
              })}
            />
            <Input
              name="password"
              type="password"
              placeholder="Tip. It's a secret"
              error={errors.password?.message}
              register={register({
                required: true,
                pattern: passwordValidation,
              })}
            />
            <Button className="mt-4 bg-purple-500 w-full">Log in</Button>
          </form>
        </div>
      </FormContainer>
    </ContainerLayout>
  );
};

export default LogIn;
