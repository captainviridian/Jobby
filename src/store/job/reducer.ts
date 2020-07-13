import { createSlice } from '@reduxjs/toolkit';

import { Draft } from 'immer';
import { Job, JobState } from './types';

const loading = (state: JobState): void => {
  state.loading = true;
};

const initialState: JobState = {
  item: {} as Job,
  loading: false,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    fetching: loading,
    fetched: (state: Draft<JobState>, { payload }: { payload: Job }) => {
      state.item = payload;
      state.loading = false;
    },
    fetchingError: state => {
      state.loading = false;
    },
    sendingSubscription: loading,
    subscriptionSent: state => {
      state.loading = false;
    },
    subscriptionError: state => {
      state.loading = false;
    },
    clearSelectedJob: state => {
      state.item = {} as Job;
    },
  },
});

export const { actions } = jobSlice;

export default jobSlice.reducer;