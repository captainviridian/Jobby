import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectJob, selectLoading } from 'store/job/selectors';
import { getJob, sendSubscription } from 'store/job/thunks';
import { actions } from 'store/job/reducer';

import { selectUser } from 'store/user/selectors';

import JobModal from 'components/JobModal';

const { clearSelectedJob } = actions;

interface Props {
  jobSlug: string,
  companySlug: string,
  onClose: () => void,
}

const VisibleJobModal = ({ jobSlug, companySlug, onClose }: Props) => {
  const dispatch = useDispatch();
  
  const user = useSelector(selectUser);
  
  const props = {
    job: useSelector(selectJob),
    loading: useSelector(selectLoading),
    onStart: useCallback(() => {
      dispatch(getJob(jobSlug, companySlug))
    }, [dispatch, jobSlug, companySlug]),
    onConfirm: useCallback(() => {
      dispatch(sendSubscription(user))
    }, [dispatch, user]),
    onClose: useCallback(() => {
      dispatch(clearSelectedJob());
      onClose();
    }, [dispatch, onClose]),
  };
  
  return <JobModal {...props} />
}

export default VisibleJobModal;