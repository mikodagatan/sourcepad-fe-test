import { atom } from 'recoil';

export enum LoginMachine {
  guest = 'Guest',
  loggedIn = 'Signed In',
}

export const loginMachine = atom({
  key: 'loginMachine',
  default: LoginMachine.guest,
});
