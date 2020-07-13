import { createSlice } from '@reduxjs/toolkit';
import { User, UserState } from './types';
import { Draft } from 'immer';

const initialState: UserState = { user: {} as User, setting: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userGot: (state, { payload }) => {
      state.user = payload;
    },
    settingUser: (state: Draft<UserState>) => {
      state.setting = true;
    },
    userSet: (state) => {
      state.setting = false;
    },
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;