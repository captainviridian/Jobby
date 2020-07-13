import { AppBar, Slide, Typography } from '@material-ui/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
    },
  },
  title: {
    padding: theme.spacing(1, 0),
  },
  link: {
    textDecoration: 'none',
  }
}));

const Header = () => {
  const classes = useStyles();
  const lastScroll = useRef(Number.MAX_SAFE_INTEGER);
  
  const [show, setShow] = useState(true);
  
  const handleScroll = useCallback(() => {
    const newScroll = window.scrollY;
    if (newScroll === lastScroll.current) {
      return;
    }
    const shouldShow = newScroll < lastScroll.current;
    
    setShow(shouldShow);
    lastScroll.current = newScroll;
  }, [])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, [handleScroll]);
  
  return (
    <Slide timeout={600} direction='down' in={show} mountOnEnter unmountOnExit>
      <AppBar className={classes.header} color='default'>
        <Link to='/' className={classes.link}>
          <Typography className={classes.title} variant='h4' color='primary'>
            Jobby
          </Typography>
        </Link>
      </AppBar>
    </Slide>
  );
};

export default Header;