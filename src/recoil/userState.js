import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom({
  key: 'userState',
  default: {
    writerId: 'manager@naver.com',
    isManager: true,
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;