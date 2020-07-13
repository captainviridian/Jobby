import { UserState } from './types';

interface RootState {
  user: UserState,
}

export const selectUser = (state: RootState) => state.user.user;

export const selectSettingUser = (state: RootState) => state.user.setting;