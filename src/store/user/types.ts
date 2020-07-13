import { Action } from 'redux';

export interface User {
  name: string,
  email: string
}

export type UserState = {
  user: User,
  setting: boolean,
}

export interface UserGotAction extends Action<string> {
  payload: User,
}

export interface UserSetAction extends Action<string> {
  payload: undefined,
}


export type UserAction = UserSetAction | UserGotAction;