import { ADMIN_REVISION_INFO_ACTION_TYPE } from './admin-revision-info.constant';
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

export function adminRevisionInfoStore(state = initialState, action) {
  switch (action.type) {
    case ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        user: setRequestPending(state.user),
      };

    case ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        user: setRequestSuccess(state.user, action.payload),
      };

    case ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        user: setRequestError(state.user, action.errorMessage),
      };

    case ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_UPDATE_PENDING:
      return {
        ...state,
        user: setRequestUpdatePending(state.user),
      };
    case ADMIN_REVISION_INFO_ACTION_TYPE.REQUEST_UPDATE_SUCCESS:
      return {
        ...state,
        user: setRequestUpdateSuccess(state.user, action.payload),
      };

    default:
      return state;
  }
}
