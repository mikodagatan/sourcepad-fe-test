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

export const userState = atom({
  key: 'userState',
  default: {},
});

export const profileState = atom({
  key: 'profileState',
  default: {
    id: null,
    userId: null,
    address1: null,
    address2: null,
    city: null,
    zipCode: null,
    country: null,
    firstName: null,
    lastName: null,
    phone: null,
  },
});
