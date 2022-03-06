import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './AppRoutes';
import { getLocalStorage } from 'utils';
import { loginMachine, LoginMachine } from 'store';
import { useSetRecoilState } from 'recoil';

const token = getLocalStorage('token', null);
const user = getLocalStorage('user', null);
if (token && user) {
  const setLoginState = useSetRecoilState(loginMachine);
  setLoginState({
    user: { email: user },
    state: LoginMachine.loggedIn,
  });
}

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SnackbarProvider>
        <AppRoutes />
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
