import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const profileState = atom({
  key: 'profileState',
  default: {
    id: null,
    userId: null,
    address_1: null,
    address_2: null,
    city: null,
    zipCode: null,
    country: null,
    firstName: null,
    lastName: null,
    phone: null,
  },
});

export const profileCreateStep = atom({
  key: 'profileCreateStep',
  default: 0,
});
