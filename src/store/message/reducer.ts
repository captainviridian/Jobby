import { createSlice } from '@reduxjs/toolkit';
import { MessageState } from './types';
import { Draft } from 'immer';

import { actions as jobActions } from 'store/job/reducer';
import { actions as jobsActions } from 'store/jobs/reducer';

const initialState: MessageState = { text: '', open: false, type: undefined };

const reset = (state: Draft<MessageState>) => {
  state.open = false;
  state.text = '';
  state.type = undefined;
};

const errorMessage = (state: Draft<MessageState>, text: string) => {
  state.open = true;
  state.text = text;
  state.type = 'error';
};

const successMessage = (state: Draft<MessageState>, text: string) => {
  state.open = true;
  state.text = text;
  state.type = 'success';
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    messageReset: state => reset(state),
  },
  extraReducers: {
    [jobActions.subscriptionSent.toString()]: state => {
      successMessage(state, 'Subscription sent successfully');
    },
    [jobActions.fetchingError.toString()]: state => {
      errorMessage(state, 'Error fetching data');
    },
    [jobActions.subscriptionError.toString()]: state => {
      errorMessage(state, 'Error subscribing');
    },
    [jobsActions.fetchingError.toString()]: state => {
      errorMessage(state, 'Error fetching data');
    }
  }
});

export const { actions } = messageSlice;

export default messageSlice.reducer;