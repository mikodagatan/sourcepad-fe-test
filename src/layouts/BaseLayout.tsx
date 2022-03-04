import { Outlet } from 'react-router-dom';
import { Avatar } from 'components';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import { LoginMachine, loginMachine } from 'store';
import { Button } from 'components';

import { siteName } from '../constants';

const BaseLayout = () => {
  const loggedIn = useRecoilValue(loginMachine) === LoginMachine.loggedIn;

  return (
    <>
      <nav className="w-full h-14 py-2 flex justify-between items-center bg-gray-100 shadow">
        <div className="left pl-4 font-semibold">{siteName}</div>
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
      </nav>
      <Outlet />
    </>
  );
};

export default BaseLayout;
