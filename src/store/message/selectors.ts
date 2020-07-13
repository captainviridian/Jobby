import { MessageState } from './types';

interface RootState {
  message: MessageState
}

export const selectMessage = (state: RootState) => state.message;