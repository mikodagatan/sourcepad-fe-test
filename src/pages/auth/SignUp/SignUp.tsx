import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { FormContainer, Input, Button, Logo } from 'components';
import { ContainerLayout } from 'layouts';

import { emailValidation, passwordValidation } from 'utils';

import { LogInLink } from '../shared/AuthLinks';

interface ISignUpDetails {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpDetails>({
    mode: 'onChange',
  });

  const onSubmit = () => {};

  return (
    <ContainerLayout className="bg-emerald-300">
      <FormContainer>
        <div className="p-6 flex-flex-col">
          <h1 className="text-lg font-bold">Register</h1>
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
              placeholder="Your password"
              error={errors.password?.message}
              register={register({
                required: true,
                pattern: passwordValidation,
              })}
            />
            <Input
              name="passwordConfirmation"
              type="password"
              placeholder="Password confirmation"
              error={errors.passwordConfirmation?.message}
              register={register({
                required: true,
                validate: (v) => {
                  return v === watch('password') || 'Passwords do not match';
                },
              })}
            />
            <LogInLink />
            <Button type="submit" className="mt-4 bg-purple-500 w-full">
              Register
            </Button>
          </form>
        </div>
      </FormContainer>
    </ContainerLayout>
  );
};

export default SignUp;
