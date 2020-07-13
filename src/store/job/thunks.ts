import { Thunk } from 'store';
import { Job, JobAction } from './types';
import { fetchJob, postSubscription } from 'connection';

import { User } from 'store/user/types';

import { actions } from './reducer';


export const getJob = (jobSlug: string, companySlug: string): Thunk<void, JobAction> => async dispatch => {
  let job: Job = {} as Job;
  dispatch(actions.fetching());
  
  try {
    const res = await fetchJob(jobSlug, companySlug);
    job = res.job;
    dispatch(actions.fetched(job));
  } catch (e) {
    dispatch(actions.fetchingError());
  }
};

export const sendSubscription = (user: User): Thunk<void, JobAction> => async (dispatch) => {
    dispatch(actions.sendingSubscription());
    
    try {
      await postSubscription(user);
      dispatch(actions.subscriptionSent());
    } catch (e) {
      dispatch(actions.fetchingError)
    }
  };