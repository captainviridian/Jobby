import React, { useEffect } from 'react';

import { selectJobs, selectLoading, selectPage, selectTotalPages } from 'store/jobs/selectors';
import { getJobs } from 'store/jobs/thunks';
import { actions } from 'store/jobs/reducer';

import { useDispatch, useSelector } from 'react-redux';
import JobList from 'components/JobList';
import { getUser } from 'store/user/thunks';

const VisibleJobList = ({ pageNumber, onSwitchPage }: { pageNumber: number, onSwitchPage: (number: number) => void }) => {
  const dispatch = useDispatch();
  
  const allJobs = useSelector(selectJobs)
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  
  useEffect(() => {
    dispatch(getUser());
    dispatch(getJobs());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(actions.switchPage({ pageNumber }));
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [dispatch, pageNumber, allJobs])
  
  const props = {
    totalPages,
    page,
    loading: useSelector(selectLoading),
    onSwitchPage,
    pageNumber
  };
  
  return <JobList {...props} />;
};

export default VisibleJobList;