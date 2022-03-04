import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { BaseLayout } from 'layouts';
import { Home, LogIn } from 'pages';

const AppRoutes = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default AppRoutes;
