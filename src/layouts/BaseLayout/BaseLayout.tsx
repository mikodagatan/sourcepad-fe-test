import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'components';
import { useRecoilValue } from 'recoil';
import { LoginMachine, loginMachine } from 'store';
import { useAuth } from 'hooks';

import { Navbar, NavbarLeft, NavbarRight } from './BaseLayout.styles';

const BaseLayout = () => {
  const navigate = useNavigate();
  const auth = useRecoilValue(loginMachine);
  const loggedIn = auth.state === LoginMachine.loggedIn;
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  return (
    <>
      <Navbar>
        <NavbarLeft>{process.env.REACT_APP_SITENAME}</NavbarLeft>
        <NavbarRight>
          {loggedIn ? (
            <div className="flex space-x-4 items-center">
              <div className="flex items-center">
                <Avatar />
                <span className="ml-2">Username</span>
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
