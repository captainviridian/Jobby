import { JobsState } from './types';

interface RootState {
  jobs: JobsState
}

export const selectJobs = (state: RootState) => state.jobs.content;

export const selectLoading = (state: RootState) => state.jobs.loading;

export const selectPage = (state: RootState) => state.jobs.page;

export const selectTotalPages = (state: RootState) => state.jobs.totalPages;