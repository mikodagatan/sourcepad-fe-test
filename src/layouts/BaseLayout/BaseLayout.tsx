import { Outlet } from 'react-router-dom';
import { Avatar } from 'components';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import { LoginMachine, loginMachine } from 'store';
import { Button } from 'components';

import { Navbar } from './BaseLayout.styles';

const BaseLayout = () => {
  const auth = useRecoilValue(loginMachine);
  const loggedIn = auth.state === LoginMachine.loggedIn;

  return (
    <>
      <Navbar>
        <div className="left pl-4 font-semibold">
          {process.env.REACT_APP_SITE_NAME}
        </div>
        <div className="right pr-4">
          {loggedIn ? (
            <div className="flex items-center">
              <Avatar />
              <span className="ml-2">Username</span>
            </div>
          ) : (
            <Link to="/login">
              <Button>Log in</Button>
            </Link>
          )}
        </div>
      </Navbar>
      <Outlet />
    </>
  );
};

export default BaseLayout;
