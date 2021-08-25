import { DASHBOARD_ADMIN_ACTION_TYPE } from './dashboard-admin.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  dashboardAdmin: initRequestState(),
};

export function dashboardAdminStore(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_ADMIN_ACTION_TYPE.DASHBOARD_ADMIN_LOAD_REQUEST_PENDING:
      return {
        ...state,
        dashboardAdmin: setRequestPending(state.dashboardAdmin),
      };

    case DASHBOARD_ADMIN_ACTION_TYPE.DASHBOARD_ADMIN_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        dashboardAdmin: setRequestSuccess(state.dashboardAdmin, action.data),
      };

    case DASHBOARD_ADMIN_ACTION_TYPE.DASHBOARD_ADMIN_LOAD_REQUEST_ERROR:
      return {
        ...state,
        dashboardAdmin: setRequestError(
          state.dashboardAdmin,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
