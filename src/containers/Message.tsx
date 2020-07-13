import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessage } from 'store/message/selectors';

import { resetMessage } from 'store/message/thunks';

import { Snackbar } from '@material-ui/core';
import { useCallback } from 'react';

import MuiAlert from '@material-ui/lab/Alert/Alert';

const Message = () => {
  const { text, type, open } = useSelector(selectMessage);
  
  const dispatch = useDispatch();
  
  const props = {
    open,
    autoHideDuration: 3000,
    onClose: useCallback((e?: React.SyntheticEvent, r?: string) => {
      dispatch(resetMessage());
    }, [dispatch])
  }
  
  return (
    <Snackbar {...props}>
      <MuiAlert variant='filled' severity={type} elevation={6}>{text}</MuiAlert>
    </Snackbar>
  );
};

export default Message;