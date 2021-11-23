import React from 'react';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { ADMIN_REVISION_INFO_STORE_NAME } from './admin-revision-info.constant';
import { getAdminRevisionInfo } from './admin-revision-info.action';
import { AdminRevisionInfoComponent } from './admin-revision-info.component';

export function AdminRevisionInfoContainer() {
  const dispatch = useDispatch();

  const { data, pageLoading } = useSelector((state) => ({
    data: state[ADMIN_REVISION_INFO_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    dispatch(getAdminRevisionInfo());
  }, []);

  return (
    <AdminRevisionInfoComponent
      isPending={isRequestPending(data.user)}
      isError={isRequestError(data.user)}
      isSuccess={isRequestSuccess(data.user)}
      data={getRequestData(data.user, '')}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(data.user)}
    />
  );
}
