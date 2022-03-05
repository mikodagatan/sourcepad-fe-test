import { useForm } from 'react-hook-form';

import { FormContainer, Input, Button, Logo } from 'components';
import { ContainerLayout } from 'layouts';
import { emailValidation, passwordValidation } from 'utils';
import { useNavigate } from 'react-router';
import { SignUpLink } from '../shared/AuthLinks';

import { SiteName, Subheader } from './LogIn.styles';

import useLogin from './hooks/useLogin';

interface ILoginDetails {
  email: string;
  password: string;
}

const LogIn = () => {
  const { fetchLogin, loading: authenticating } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDetails>({
    mode: 'onChange',
  });

  const onSubmit = async (data: ILoginDetails) => {
    const response = await fetchLogin(data);
    if (response === true) navigate('/profile');
  };

  return (
    <ContainerLayout className="bg-purple-300">
      <FormContainer>
        <div className="flex flex-col p-6">
          <SiteName>{process.env.REACT_APP_SITENAME}</SiteName>
          <div className="flex justify-center">
            <Logo />
          </div>
          <Subheader>Welcome! Let's Log in</Subheader>
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
              placeholder="Tip. It's a secret"
              error={errors.password?.message}
              register={register({
                required: true,
              })}
            />
            <SignUpLink />
            <Button
              type="submit"
              className="mt-4 bg-purple-500 w-full"
              disabled={authenticating}
            >
              Log in
            </Button>
          </form>
        </div>
      </FormContainer>
    </ContainerLayout>
  );
};

export default LogIn;
