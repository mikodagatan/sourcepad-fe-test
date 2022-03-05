import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BaseLayout } from 'layouts';
import { Home, LogIn, Profile } from 'pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
