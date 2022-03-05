import { useForm } from 'react-hook-form';

import { FormContainer, Input, Button, Logo, Alert } from 'components';
import { ContainerLayout } from 'layouts';
import { emailValidation, passwordValidation } from 'utils';
import { useNavigate } from 'react-router';

import { SiteName, Subheader } from './LogIn.styles';

import useLogin from './hooks/useLogin';

interface ILoginDetails {
  email: string;
  password: string;
}

const LogIn = () => {
  const {
    fetchLogin,
    authenticated,
    loading: authenticating,
    error: authError,
  } = useLogin();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDetails>({
    mode: 'onChange',
  });

  const onSubmit = async (data: ILoginDetails) => {
    await fetchLogin(data);
    if (authenticated) return navigate('/profile');
  };

  const responseChanges = {
    Unauthorized:
      'There seems to be a problem with your email or password. ehe?',
  };

  return (
    <ContainerLayout className="bg-purple-300">
      <FormContainer className="">
        <div className="flex flex-col p-6">
          <SiteName>{process.env.REACT_APP_SITE_NAME}</SiteName>
          <div className="flex justify-center">
            <Logo />
          </div>
          <Subheader>Welcome! Let's Log in</Subheader>
          <Alert
            status="danger"
            message={responseChanges[authError]}
            isOpen={authError}
          />
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
              })}
            />
            <Button
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
