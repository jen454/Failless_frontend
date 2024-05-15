import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom({
  key: 'userState',
  default: {
    writerId: 'test',
    isManager: true,
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;