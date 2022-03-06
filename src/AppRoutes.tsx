import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { BaseLayout } from 'layouts';
import { Home, SignUp, LogIn, Profile, ProfileCreateWizard } from 'pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="/profile/create" element={<ProfileCreateWizard />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
