import React, { useCallback } from 'react';

import Template from 'components/Template';
import VisibleJobList from '../containers/VisibleJobList';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { ShowJob } from './index';

import GetUserData from '../containers/GetUserData';
import { useSelector } from 'react-redux';

import { selectLoading as selectLoadingJob } from '../store/job/selectors';
import { selectLoading } from '../store/jobs/selectors';
import { selectSettingUser } from '../store/user/selectors';

const Jobs = () => {
  const loadingJob = useSelector(selectLoadingJob)
  const loadingJobs = useSelector(selectLoading)
  const settingUser = useSelector(selectSettingUser);
  
  const history = useHistory();
  
  const { search, pathname } = useLocation();
  const query = new URLSearchParams(search);
  
  const pageNumber = query.get('page');
  
  const onSwitchPage = useCallback((number) => {
    history.push(`${pathname}?page=${number}`);
  }, [history, pathname]);
  
  return (
    <>
      <Template loading={loadingJob || loadingJobs || settingUser}>
        <VisibleJobList
          onSwitchPage={onSwitchPage}
          pageNumber={(pageNumber && parseInt(pageNumber)) || 1}
        />
        <GetUserData />
        <Route path="/jobs/:jobSlug/:companySlug" component={ShowJob} />
      </Template>
    </>
  );
};

export default Jobs;
