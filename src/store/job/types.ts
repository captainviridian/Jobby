import { Action } from 'redux';

export interface Job {
  id: string,
  title: string,
  slug: string,
  cities: Array<{
    name: string,
    country: {
      name: string,
    },
  }>,
  postedAt: Date,
  description: string,
  company: {
    name: string,
    slug: string,
    websiteUrl: string,
  }
  isPublished: boolean,
}

export interface JobState {
  item: Job,
  loading: boolean,
}

interface FetchingJobAction extends Action<string> {
  payload: undefined,
}

interface JobFetchedAction extends Action<string> {
  payload: Job,
}

interface SendingSubscriptionAction extends Action<String> {
  payload: undefined,
}

interface SubscriptionSentAction extends Action<String> {
  payload: undefined,
}

export type JobAction =
  JobFetchedAction
  | FetchingJobAction
  | SendingSubscriptionAction
  | SubscriptionSentAction;
