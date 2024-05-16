import { selector, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const userState = selector({
  key: 'userState',
  get: ({ get }) => {
    const user = get(userStatePersisted);
    return user;
  },
  set: ({ set }, newValue) => {
    set(userStatePersisted, newValue);
  },
  effects_UNSTABLE: [persistAtom],
});

export const userStatePersisted = atom({
  key: 'userStatePersisted',
  default: {
    writerId: '',
    isManager: false,
  },
  effects_UNSTABLE: [persistAtom],
});
