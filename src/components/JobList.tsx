import React from 'react';

import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import JobCard from 'components/JobCard';

import { Job } from 'store/job/types';

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
    maxWidth: theme.breakpoints.values.md
  },
  content: ({ loading }: { loading: boolean }) => ({
    paddingTop: loading ? '35vh' : 0,
  }),
}));

interface Props {
  page: Array<Job>,
  loading: boolean,
  totalPages: number,
  onSwitchPage: (number: number) => void,
  pageNumber: number,
}

const JobList = ({ page, loading, totalPages, onSwitchPage, pageNumber }: Props) => {
  const classes = useStyles({ loading });
  
  return (loading
      ? null
      : <Grid spacing={4} container direction='column' alignItems='center'
              className={classes.content}>
        <Grid
          item
          container
          justify='center'
          spacing={3}
          className={classes.list}
        >
          {page.map(job => (
            <JobCard key={job.id} pageNumber={pageNumber} {...job} />
          ))}
        </Grid>
        <Grid item>
          <Pagination
            color='primary'
            count={totalPages}
            onChange={(e, pageNumber) => onSwitchPage(pageNumber)}
            page={pageNumber}
          />
        </Grid>
      </Grid>
  );
};

export default JobList;