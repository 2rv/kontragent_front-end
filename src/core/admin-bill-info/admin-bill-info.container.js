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
import { ADMIN_BILL_INFO_STORE_NAME } from './admin-bill-info.constant';
import { getAdminBillInfo } from './admin-bill-info.action';
import { AdminBillInfoComponent } from './admin-bill-info.component';

export function AdminBillInfoContainer() {
  const dispatch = useDispatch();

  const { data, pageLoading } = useSelector((state) => ({
    data: state[ADMIN_BILL_INFO_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    dispatch(getAdminBillInfo());
  }, []);

  return (
    <AdminBillInfoComponent
      isPending={isRequestPending(data.bill)}
      isError={isRequestError(data.bill)}
      isSuccess={isRequestSuccess(data.bill)}
      data={getRequestData(data.bill, '')}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(data.bill)}
    />
  );
}
