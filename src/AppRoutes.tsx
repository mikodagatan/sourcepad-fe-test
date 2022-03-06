import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { BaseLayout } from 'layouts';
import { Home, SignUp, LogIn, Profile, CreateProfile } from 'pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/create" element={<CreateProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
