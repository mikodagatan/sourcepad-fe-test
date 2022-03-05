import { Link } from 'react-router-dom';

export const SignUpLink = () => {
  return (
    <div className="text-center">
      No account? &nbsp;
      <Link to="/signup" className="hover:underline">
        Sign up!
      </Link>
    </div>
  );
};

export const LogInLink = () => {
  return (
    <div className="text-center">
      Already have an account? &nbsp;
      <Link to="/login" className="hover:underline">
        Log in!
      </Link>
    </div>
  );
};
