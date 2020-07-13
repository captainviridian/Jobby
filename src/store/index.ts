import { combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

import jobsReducer from './jobs/reducer'
import jobReducer from './job/reducer';
import userReducer from './user/reducer';
import messageReducer from './message/reducer';

import { Action } from 'redux';

const reducer = combineReducers({
  jobs: jobsReducer,
  job: jobReducer,
  user: userReducer,
  message: messageReducer,
});

export type RootState = ReturnType<typeof reducer>

export type Thunk<ReturnType, ActionType extends Action> = ThunkAction<ReturnType, RootState, unknown, ActionType>;

export default configureStore({ reducer });