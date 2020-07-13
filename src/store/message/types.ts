import { Action } from 'redux';

export interface MessageState {
  open: boolean,
  text: string,
  type: MessageType,
}

export type MessageType = 'error' | 'info' | 'success' | 'warning' | undefined;


interface SendMessageAction extends Action<string> {
  payload: { text: string },
}

interface SendErrorMessageAction extends Action<string> {
  payload: { text: string },
}

interface ResetMessageAction extends Action<string> {
  payload: undefined,
}

export type MessageAction = SendErrorMessageAction | SendMessageAction | ResetMessageAction