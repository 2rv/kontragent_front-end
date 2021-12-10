import { ADMIN_BILL_INFO_ACTION_TYPE } from './admin-bill-info.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  setRequestUpdatePending,
  setRequestUpdateSuccess,
} from '../../main/store/store.service';

const initialState = {
  bill: initRequestState(),
};

export function adminBillInfoStore(state = initialState, action) {
  switch (action.type) {
    case ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        bill: setRequestPending(state.bill),
      };

    case ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        bill: setRequestSuccess(state.bill, action.payload),
      };

    case ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        bill: setRequestError(state.bill, action.errorMessage),
      };

    case ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_UPDATE_PENDING:
      return {
        ...state,
        bill: setRequestUpdatePending(state.bill),
      };
    case ADMIN_BILL_INFO_ACTION_TYPE.REQUEST_UPDATE_SUCCESS:
      return {
        ...state,
        bill: setRequestUpdateSuccess(state.bill, action.payload),
      };

    default:
      return state;
  }
}
