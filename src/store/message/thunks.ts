import { Thunk } from 'store';
import { MessageAction } from './types';

import { actions } from './reducer';

export const resetMessage = (): Thunk<void, MessageAction> => async dispatch => {
  dispatch(actions.messageReset());
};