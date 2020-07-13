import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserDataModal from '../components/UserDataModal';
import { selectSettingUser } from '../store/user/selectors';
import { setUser } from '../store/user/thunks';

interface Props {
  jobSlug: string,
  companySlug: string,
  onClose: () => void,
}

const GetUserData = () => {
  const dispatch = useDispatch();
  
  const props = {
    settingUser: useSelector(selectSettingUser),
    onSubmit: useCallback((name: string, email: string) => {
      dispatch(setUser(name, email))
    }, [dispatch]),
  };
  
  return <UserDataModal {...props} />
}

export default GetUserData;