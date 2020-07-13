import { GraphQLClient } from 'graphql-request';
import { User } from '../store/user/types';

const endpoint = 'https://api.graphql.jobs/';

const client = new GraphQLClient(endpoint);

export const fetchJobs = async () => client.request(
  `{
    jobs {
      id
      title
      company {
        name
        slug
      }
      slug
      postedAt
      isPublished
    }
  }`);

export const fetchJob = async (jobSlug: string, companySlug: string) => client.request(
  `query getJob($jobSlug: String!, $companySlug: String!) {
    job(input: { jobSlug: $jobSlug, companySlug: $companySlug }) {
      id
      title
      description
      postedAt
      company {
        name
        slug
        websiteUrl
      }
      cities {
        name
        country {
          name
        }
      }
    }
  }`, { jobSlug, companySlug });

export const postSubscription = async (user: User) => client.request(
  `mutation createSubscription($name: String!, $email: String!) {
    subscribe(input: {
      name: $name
      email: $email
    }) {
      name
    }
  }`, {...user});