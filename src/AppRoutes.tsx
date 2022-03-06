import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { BaseLayout } from 'layouts';
import { Home, SignUp, LogIn, Profile, CreateProfile } from 'pages';
import useLogin from 'pages/auth/LogIn/hooks/useLogin';

const AppRoutes = () => {
  const { checkLogin } = useLogin();
  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/create" element={<CreateProfile />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default AppRoutes;
