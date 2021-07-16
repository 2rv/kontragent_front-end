import { useEffect } from 'react';
import { dashboardAdminLoad } from './dashboard-admin.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { DASHBOARD_ADMIN_STORE_NAME } from './dashboard-admin.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function DashboardAdminContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[DASHBOARD_ADMIN_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  // useEffect(() => {
  //   dispatch(dashboardAdminLoad());
  // }, []);

  return (
    <DashboardAdminComponent
      isPending={isRequestPending(state.dashboardAdmin)}
      isError={isRequestError(state.dashboardAdmin)}
      isSuccess={isRequestSuccess(state.dashboardAdmin)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.dashboardAdmin)}
    />
  );
}
