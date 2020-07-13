import { Thunk } from 'store';
import { JobsAction } from './types';

import { fetchJobs } from 'connection';
import { Job } from 'store/job/types';
import { actions } from './reducer'

export const getJobs = (): Thunk<void, JobsAction> => async (dispatch: Function) => {
  let jobs: Array<Job> = [];
  dispatch(actions.fetching())
  
  try {
    const res = await fetchJobs();
    jobs = res.jobs;
    dispatch(actions.fetched({ jobs: jobs.filter(job => job.isPublished) }));
  } catch (e) {
    dispatch(actions.fetchingError())
  }
};