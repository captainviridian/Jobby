import { Job } from '../job/types';
import { Action } from 'redux';

export interface JobsState {
  content: Array<Job>,
  loading: boolean,
  page: Array<Job>,
  totalPages: number,
}

interface FetchingJobsAction extends Action<string> {
  payload: undefined,
}

interface JobFetchedAction extends Action<string> {
  payload: {
    jobs: Array<Job>,
  },
}

interface SwitchPageAction extends Action<string> {
  payload: {
    page: number,
  },
}

export type JobsAction = JobFetchedAction | FetchingJobsAction | SwitchPageAction;
