import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Loading from 'components/Loading';
import Header from './Header';

import Message from 'containers/Message';

const useStyles = makeStyles(theme => ({
  body: {
    minHeight: `calc(100vh - ${theme.spacing(10)}px)`,
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(5, 2),
    color: 'white'
  },
  content: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface Props {
  children: ReactNode,
  loading: boolean,
}

const Template = ({ children, loading }: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.body}>
      <Header />
      <main className={classes.content}>
        {children}
      </main>
      {loading && <Loading />}
      <Message />
    </div>
  );
};

export default Template;