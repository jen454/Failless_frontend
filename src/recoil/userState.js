import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userState = atom({
  key: 'userState',
  default: {
    _id: '',
    id: '',
    password: '',
    nickname: '',
  },
  effects_UNSTABLE: [persistAtom],
});

export default userState;