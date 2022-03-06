import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export enum LoginMachine {
  guest = 'Guest',
  loggedIn = 'Logged In',
}

export const loginMachine = atom({
  key: 'loginMachine',
  default: {
    user: '',
    userId: '',
    state: LoginMachine.guest,
  },
});
