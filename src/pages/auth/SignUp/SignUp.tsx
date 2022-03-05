import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { FormContainer, Input, Button, Logo } from 'components';
import { ContainerLayout } from 'layouts';
import { IUser } from 'services';
import { emailValidation, passwordValidation } from 'utils';

import { LogInLink, SiteName } from '../shared';

import CyanideImage from 'assets/images/cyanide-avatar3.png';

import useSignUp from './hooks/useSignUp';

interface ISignUpDetails extends IUser {
  passwordConfirmation: string;
}

const SignUp = () => {
  const navigate = useNavigate();

  const { fetchSignUp, registered, loading: registering, error } = useSignUp();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpDetails>({
    mode: 'onChange',
  });

  const onSubmit = async (data: ISignUpDetails) => {
    await fetchSignUp(data);
    if (registered) navigate('/profile');
  };

  return (
    <ContainerLayout className="bg-emerald-300">
      <FormContainer>
        <div className="p-6 flex-flex-col">
          <SiteName>{process.env.REACT_APP_SITENAME}</SiteName>
          <div className="flex justify-center">
            <div className="flex justify-center pb-3">
              <img src={CyanideImage} className="w-32" />
            </div>
          </div>
          <div className="text-center text-xs ">Join us. Woooooo!</div>
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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
