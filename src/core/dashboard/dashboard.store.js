import { DASHBOARD_ACTION_TYPE } from './dashboard.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  dashboard: initRequestState(),
};

export function dashboardStore(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_ACTION_TYPE.DASHBOARD_LOAD_REQUEST_PENDING:
      return {
        ...state,
        dashboard: setRequestPending(state.dashboard),
      };

    case DASHBOARD_ACTION_TYPE.DASHBOARD_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        dashboard: setRequestSuccess(state.dashboard, action.data),
      };

    case DASHBOARD_ACTION_TYPE.DASHBOARD_LOAD_REQUEST_ERROR:
      return {
        ...state,
        dashboard: setRequestError(state.dashboard, action.errorMessage),
      };

    default:
      return state;
  }
}
