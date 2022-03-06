import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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
  effects_UNSTABLE: [persistAtom],
});

export const profileCreateStep = atom({
  key: 'profileCreateStep',
  default: 0,
});
