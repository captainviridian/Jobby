import React from 'react';

import { Card, CardActions, CardContent, Grid, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  item: {
    maxWidth: theme.breakpoints.values.sm / 2,
  },
  link: {
    textDecoration: 'none',
    '&:link': {
      color: 'inherit',
    },
    '&:visited': {
      color: 'inherit'
    },
  },
  actions: {
    padding: theme.spacing(0, 1.5, 1, 2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
}));

interface Props {
  title: string,
  slug: string,
  postedAt: Date,
  pageNumber: number,
  company: {
    name: string,
    slug: string,
  },
}

const JobCard = (
  {
    title,
    slug,
    postedAt,
    pageNumber,
    company: { slug: companySlug, name: companyName }
  }: Props
) => {
  const classes = useStyles();
  
  return (
    <Grid item xs={12} sm={6} md={3} className={classes.item}>
      <Link className={classes.link} to={`/jobs/${slug}/${companySlug}?page=${pageNumber}`}>
        <Card raised className={classes.card}>
          <CardContent>
            <Typography
              variant='h5'
              color='textSecondary'
            >
              {title}
            </Typography>
            <Typography variant='h6' color='primary'>
              {companyName}
            </Typography>
          </CardContent>
          
          <CardActions disableSpacing className={classes.actions}>
            <Typography variant='subtitle2'>
              Posted: {new Date(postedAt).toLocaleDateString('en-US')}
            </Typography>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

export default JobCard;