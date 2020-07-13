import { createSlice } from '@reduxjs/toolkit';

import { JobsState } from './types';
import { Draft } from 'immer';
import { Job } from '../job/types';

const loading = (state: JobsState): void => {
  state.loading = true;
};

const initialState: JobsState = {
  content: [],
  loading: false,
  page: [],
  totalPages: 1,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    fetching: loading,
    fetched: (state: Draft<JobsState>, { payload: { jobs } }: { payload: { jobs: Array<Job> } }) => {
      state.content = jobs;
      state.totalPages = Math.ceil(jobs.length / 10);
      state.loading = false;
    },
    switchPage: (state, { payload: { pageNumber } }: { payload: { pageNumber: number } }) => {
      const start =
        (pageNumber => 10 * (pageNumber - 1))
        (Math.min(Math.max(1, pageNumber), state.totalPages));
      state.page = state.content.slice(start, start + 10);
    },
    fetchingError: state => {
      state.loading = false;
    },
  },
});

export const { actions } = jobsSlice;

export default jobsSlice.reducer;