import { JobState } from './types';

interface RootState {
  job: JobState,
}

export const selectJob = (state: RootState) => state.job.item;

export const selectLoading = (state: RootState) => state.job.loading;