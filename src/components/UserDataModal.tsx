import React, { useEffect, useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
} from '@material-ui/core';
import ModalTransition from './ModalTransition';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dialog: {
    padding: theme.spacing(2),
  },
  input: {
    minWidth: theme.breakpoints.values.md / 2,
  },
  content: {
    minHeight: theme.breakpoints.values.sm / 4,
    height: '100%',
  }
}));

interface Props {
  settingUser: boolean,
  onSubmit: (name: string, email: string) => void,
}

const UserDataModal = ({ settingUser, onSubmit }: Props) => {
  const classes = useStyles();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [open, setOpen] = useState(false);
  
  useEffect(() => setOpen(true), []);
  
  return settingUser ? (
    <Dialog
      classes={{ paper: classes.dialog }}
      open={open}
      TransitionComponent={ModalTransition}
      onBackdropClick={() => {}}
    >
      <DialogTitle>Looks like you're not signed up yet</DialogTitle>
      <form autoComplete='off' onSubmit={(e) => {
        e.preventDefault();
        onSubmit(name, email);
        setOpen(false);
      }}>
        <DialogContent className={classes.content}>
          <Grid container spacing={3}>
            <Grid item>
              <TextField
                required
                className={classes.input}
                label='Name'
                variant='outlined'
                onChange={(event => setName(event.target.value))}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                className={classes.input}
                label='E-mail'
                type='email'
                variant='outlined'
                onChange={(event => setEmail(event.target.value))}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type='submit' variant='contained' color='primary'>Confirm</Button>
        </DialogActions>
      </form>
    </Dialog>
  ) : null;
}

export default UserDataModal;