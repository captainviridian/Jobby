import React, { ReactNode, useEffect, useState } from 'react';
import { Job } from 'store/job/types';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';

import ModalTransition from 'components/ModalTransition';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    listStyle: 'none',
    display: 'contents'
  },
  infoValue: {
    marginTop: theme.spacing(-3),
  },
  dialog: {
    [theme.breakpoints.up('sm')]: {
      minWidth: theme.breakpoints.values.sm,
    },
  },
  content: {
    minHeight: theme.breakpoints.values.md / 4,
    height: '100%',
  },
  actionsSpacing: {
    '& > button': {
      margin: theme.spacing(0, 0.5),
    }
  }
}));

interface Props {
  job: Job,
  loading: boolean,
  onStart: () => void,
  onClose: () => void,
  onConfirm: () => void,
}

const Name = ({ children }: { children: ReactNode }) => (
  <Grid item>
    <Typography variant='h6' component='span' color='primary'>{children}</Typography>
  </Grid>
);

const Value = ({ children, link }: { children: ReactNode, link?: boolean }) => {
  const classes = useStyles();
  
  const innerContent = link ?
    <a href={children as string}>{children}</a> : children;
  return (
    <Grid item className={classes.infoValue}>
      <Typography variant='subtitle1' component='span'>{innerContent}</Typography>
    </Grid>
  )
};

const JobInfo = ({ name, value, link }: { name: string, value: ReactNode, link?: boolean }) => (
  <Grid container spacing={6} alignItems='baseline'>
    <Name>{name}</Name>
    <Value link={link}>{value}</Value>
  </Grid>
)

const JobModal = ({ job, loading, onStart, onClose, onConfirm }: Props) => {
    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    
    useEffect(onStart, []);
    useEffect(() => setOpen(true), []);
    
    const fullscreen = useMediaQuery(useTheme().breakpoints.down('xs'));
    
    const handleClose = () => {
      setOpen(false);
    };
    
    return (
      <>
        {loading
          ? null
          : <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={ModalTransition}
            onExited={onClose}
            fullScreen={fullscreen}
            classes={{ paper: classes.dialog }}
          >
            <DialogTitle disableTypography>
              <Typography variant='h5' color='textSecondary'>
                {job.title}
              </Typography>
            </DialogTitle>
            <DialogContent dividers className={classes.content}>
              <JobInfo name='Company' value={job.company?.name} />
              <JobInfo name='Locations' value={
                <ul className={classes.list}>{job.cities?.map(c => <li
                  key={c.name}>{c.name}, {c.country.name}</li>)}</ul>
              } />
              <JobInfo name='Website' value={job.company?.websiteUrl} link />
              <JobInfo name='Published in'
                       value={new Date(job.postedAt).toLocaleDateString('en-US')} />
            </DialogContent>
            <form onSubmit={event => {
              event.preventDefault();
              onConfirm();
              onClose();
            }}>
              <DialogActions classes={{ spacing: classes.actionsSpacing }}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type='submit' variant='contained' color='primary'>Confirm</Button>
              </DialogActions>
            </form>
          </Dialog>
        }
      </>
    );
  }
;

export default JobModal;