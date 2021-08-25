import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardLoad } from './dashboard.action';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { DASHBOARD_STORE_NAME } from './dashboard.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { DashboardComponent } from './dashboard.component';

export function DashboardContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[DASHBOARD_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  //   useEffect(() => {
  //     dispatch(dashboardLoad());
  //   }, []);

  return (
    <DashboardComponent
      isPending={isRequestPending(state.dashboard)}
      isError={isRequestError(state.dashboard)}
      isSuccess={isRequestSuccess(state.dashboard)}
      errorMessage={getRequestErrorMessage(state.dashboard)}
      pageLoading={pageLoading}
    />
  );
}
