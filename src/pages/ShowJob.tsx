import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import VisibleJobModal from 'containers/VisibleJobModal';

const ShowJob = () => {
  const { jobSlug, companySlug } = useParams();
  
  const history = useHistory();
  const { search } = useLocation();
  
  return (
    <VisibleJobModal
      jobSlug={jobSlug}
      companySlug={companySlug}
      onClose={() => history.push(`/jobs${search}`)}
    />
  );
}

export default ShowJob;
