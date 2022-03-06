import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { BaseLayout } from 'layouts';
import { Home, SignUp, LogIn, Profile, CreateProfile } from 'pages';

const AppRoutes = () => {
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
