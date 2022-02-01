import React from 'react';
import { useSelector } from 'react-redux';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { convertAdminRevisionKontragentItem } from './admin-revision-kontragent-item.convert';
import { AdminRevisionKontragentItemComponent } from './admin-revision-kontragent-item.component';

export function AdminRevisionKontragentItemContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState({});
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  React.useEffect(() => {
    getAdminRevisionKontragentItem();
  }, []);

  const getAdminRevisionKontragentItem = async () => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData({});

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `revision/admin/revision/${getQuery('revisionId')}`,
      });

      const data = convertAdminRevisionKontragentItem(res.data);

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
    <AdminRevisionKontragentItemComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
