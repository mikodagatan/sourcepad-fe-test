import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export enum LoginMachine {
  guest = 'Guest',
  loggedIn = 'Logged In',
}

export const loginMachine = atom({
  key: 'loginMachine',
  default: {
    user: '',
    state: LoginMachine.guest,
  },
  effects_UNSTABLE: [persistAtom],
});
