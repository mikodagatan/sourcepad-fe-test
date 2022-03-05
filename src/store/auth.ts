import { atom } from 'recoil';

export enum LoginMachine {
  guest = 'Guest',
  loggedIn = 'Logged In',
}

export const loginMachine = atom({
  key: 'loginMachine',
  default: {
    user: {},
    state: LoginMachine.guest,
  },
});
