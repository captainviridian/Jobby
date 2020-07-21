# Jobby

Jobby is a tiny concept React web app that provides an interface to the [GraphQL Jobs API](https://api.graphql.jobs/)

## Running
This project was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app), therefore `react-scripts` are available.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## About
This is a SPA so all navigation occurs from the root route. You can, however, use the following routes to navigate:

- `/jobs`: shows first page of the job list;
- `/jobs/:jobSlug/:companySlug`: queries a job by slug and company slug and shows it in a modal

You can also use the query string `?page=` to navigate between pages.
