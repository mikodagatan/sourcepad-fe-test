import * as React from 'react';
import { Outlet } from 'react-router-dom';
import useWhoAmI from 'hooks/useWhoAmI';
import { useRecoilValue } from 'recoil';
import { loginMachine, LoginMachine, profileState } from 'store';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const login = useRecoilValue(loginMachine);
  const profile = useRecoilValue(profileState);
  const { fetchWhoAmI } = useWhoAmI();

  React.useEffect(() => {
    const checkLogin = async () => {
      const loggedIn = login.state === LoginMachine.loggedIn;
      if (!loggedIn) return navigate('/');
      if (!profile.id) {
        const result = await fetchWhoAmI();
        if (!result) navigate('/profile/create');
      }
    };
    checkLogin();
  }, [login.state]);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
