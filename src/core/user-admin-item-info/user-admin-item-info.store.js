import { USER_ADMIN_ITEM_INFO_ACTION_TYPE } from './user-admin-item-info.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  setRequestUpdatePending,
  setRequestUpdateSuccess,
} from '../../main/store/store.service';

const initialState = {
  user: initRequestState(),
};

export function userAdminItemInfoStore(state = initialState, action) {
  switch (action.type) {
    case USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        user: setRequestPending(state.user),
      };

    case USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        user: setRequestSuccess(state.user, action.payload),
      };

    case USER_ADMIN_ITEM_INFO_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        user: setRequestError(state.user, action.errorMessage),
      };

    case USER_ADMIN_ITEM_INFO_ACTION_TYPE.REQUEST_UPDATE_PENDING:
      return {
        ...state,
        user: setRequestUpdatePending(state.user),
      };

    case USER_ADMIN_ITEM_INFO_ACTION_TYPE.REQUEST_UPDATE_SUCCESS:
      return {
        ...state,
        user: setRequestUpdateSuccess(state.user, action.payload),
      };

    default:
      return state;
  }
}
