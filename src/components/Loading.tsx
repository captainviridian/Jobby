import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: 99,
  },
  progress: {
    color: theme.palette.info.main,
  }
}));

const Loading = () => {
  const classes = useStyles();
  
  return (
    <>
      <Backdrop className={classes.backdrop} open>
        <CircularProgress className={classes.progress} size={60} color='inherit' />
      </Backdrop>
    </>
  );
};

export default Loading;