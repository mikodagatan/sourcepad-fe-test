import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'components';
import { useRecoilValue } from 'recoil';
import { LoginMachine, loginMachine, profileState } from 'store';
import { useAuth } from 'hooks';
import { join } from 'lodash';

import { Navbar, NavbarLeft, NavbarRight } from './BaseLayout.styles';

const BaseLayout = () => {
  const navigate = useNavigate();
  const auth = useRecoilValue(loginMachine);
  const profile = useRecoilValue(profileState);

  const loggedIn = auth.state === LoginMachine.loggedIn;
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  const fullName = profile.firstName
    ? join([profile.firstName, profile.lastName], ' ')
    : null;

  return (
    <>
      <Navbar>
        <NavbarLeft>{process.env.REACT_APP_SITENAME}</NavbarLeft>
        <NavbarRight>
          {loggedIn ? (
            <div className="flex space-x-4 items-center">
              <div className="flex items-center">
                <Avatar />
                <span className="ml-2">{fullName || auth.user}</span>
              </div>
              <div>
                <Button className="bg-gray-500" onClick={handleLogOut}>
                  Log out
                </Button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button>Log in</Button>
            </Link>
          )}
        </NavbarRight>
      </Navbar>
      <Outlet />
    </>
  );
};

export default BaseLayout;
