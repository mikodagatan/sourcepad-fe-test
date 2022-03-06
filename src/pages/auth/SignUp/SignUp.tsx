import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useSnackbar } from 'react-simple-snackbar';
import { snackbarDefault } from 'config';

import { FormContainer, Input, Button } from 'components';
import { ContainerLayout } from 'layouts';
import { IUser } from 'services';
import { emailValidation, passwordValidation, getErrors } from 'utils';

import { LogInLink, SiteName } from '../shared';

import CyanideImage from 'assets/images/cyanide-avatar3.png';

import useSignUp from './hooks/useSignUp';

interface ISignUpDetails extends IUser {
  passwordConfirmation: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [openSnackbar] = useSnackbar(snackbarDefault);

  const {
    fetchSignUp,
    loading: registering,
    errors: signUpErrors,
  } = useSignUp();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpDetails>({
    mode: 'onChange',
  });

  const onSubmit = async (data: ISignUpDetails) => {
    const result = await fetchSignUp(data);
    if (result) {
      navigate('/login');
      openSnackbar('Successfully registered');
    }
  };

  return (
    <ContainerLayout className="bg-emerald-300">
      <FormContainer>
        <div className="p-6 flex-flex-col">
          <SiteName>{process.env.REACT_APP_SITENAME}</SiteName>
          <div className="flex justify-center">
            <div className="flex justify-center pb-3">
              <img src={CyanideImage} alt="make new bros" className="w-32" />
            </div>
          </div>
          <div className="text-center text-xs ">Join us. Woooooo!</div>
          <form
            className="flex flex-col space-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              name="email"
              placeholder="cyanide@happiness.com"
              error={errors.email?.message || getErrors(signUpErrors?.email)}
              register={register({
                required: 'This is a required field',
                pattern: emailValidation,
              })}
            />
            <Input
              name="password"
              type="password"
              placeholder="Your password"
              error={errors.password?.message}
              register={register({
                required: 'This is a required field',
                pattern: passwordValidation,
              })}
            />
            <Input
              name="passwordConfirmation"
              type="password"
              placeholder="Password confirmation"
              error={errors.passwordConfirmation?.message}
              register={register({
                required: 'This is a required field',
                validate: (v) => {
                  return v === watch('password') || 'Passwords do not match';
                },
              })}
            />
            <LogInLink />
            <Button
              type="submit"
              className="mt-4 bg-purple-500 w-full"
              disabled={registering}
            >
              Register
            </Button>
          </form>
        </div>
      </FormContainer>
    </ContainerLayout>
  );
};

export default SignUp;
