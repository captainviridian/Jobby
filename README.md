# Jobby

Welcome to Jobby!

## Running

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Other `react-scripts` are also available.

## About
This is a SPA so all navigation occurs from the root route. You can, however, use the following routes to navigate:

- `/jobs`: shows first page of the job list;
- `/jobs/:jobSlug/:companySlug`: queries a job by slug and company slug and shows it in a modal

You can also use the query string `?page=` to navigate between pages.
