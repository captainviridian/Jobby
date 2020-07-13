import { Thunk } from 'store';
import { UserAction } from './types';

import { actions } from './reducer';

export const getUser = (): Thunk<void, UserAction> => async dispatch => {
  const user = window.localStorage.getItem('user');
  
  if (!user) dispatch(actions.settingUser());
  else dispatch(actions.userGot(JSON.parse(user)));
}

export const setUser = (name: string, email: string): Thunk<void, UserAction> => async dispatch => {
  const user = { name, email };
  
  window.localStorage.setItem('user', JSON.stringify(user));
  dispatch(actions.userSet());
  dispatch(actions.userGot(user));
};
