import React from 'react';
import { useSelector } from 'react-redux';
import { performAdminRevisionReviewItemData } from './admin-revision-review-item.convert';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AdminRevisionReviewItemComponent } from './admin-revision-review-item.component';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';

export function AdminRevisionReviewItemContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getAdminRevisionReviewItemInfo();
  }, []);

  const getAdminRevisionReviewItemInfo = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `revision/admin/revision/${getQuery('revisionId')}/review`,
      });

      const data = performAdminRevisionReviewItemData(res.data);

      setRequestPending(false);
      setData(data);
      setRequestSuccess(true);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData({});
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState({});
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <AdminRevisionReviewItemComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
