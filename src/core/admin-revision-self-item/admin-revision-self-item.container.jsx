import React from 'react';
import { useSelector } from 'react-redux';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { convertAdminRevisionSelfItem } from './admin-revision-self-item.convert';
import { AdminRevisionSelfItemComponent } from './admin-revision-self-item.component';

export function AdminRevisionSelfItemContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState({});
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  React.useEffect(() => {
    getAdminRevisionSelfItem();
  }, []);

  const getAdminRevisionSelfItem = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `revision-self/admin/revision/${getQuery('revisionId')}`,
      });

      const data = convertAdminRevisionSelfItem(res.data);

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

  return (
    <AdminRevisionSelfItemComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
