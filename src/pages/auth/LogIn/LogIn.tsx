import * as React from 'react';
import { useForm } from 'react-hook-form';

import { FormContainer, Input, Button, Logo, Alert } from 'components';
import { ContainerLayout } from 'layouts';
import { emailValidation, authErrors, getLocalStorage } from 'utils';
import { useNavigate } from 'react-router';
import { SignUpLink } from '../shared/AuthLinks';
import { IUser } from 'services';

import { SiteName, Subheader } from '../shared';

import { useAuth } from 'hooks';

const LogIn = () => {
  const navigate = useNavigate();

  const { fetchLogin, checkLogin, loading: authenticating, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    mode: 'onChange',
  });

  React.useEffect(() => {
    if (checkLogin()) {
      navigate('/profile');
    }
  }, []);

  const onSubmit = async (data: IUser) => {
    const result = await fetchLogin(data);
    if (result) navigate('/profile');
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
          {error && <Alert status="danger" message={authErrors[error]} />}
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
