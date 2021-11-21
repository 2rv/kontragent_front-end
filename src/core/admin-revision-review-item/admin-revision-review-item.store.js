import { ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE } from './admin-revision-review-item.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  requestStatus: initRequestState(),
  data: {},
};

export function adminRevisionReviewItemStore(state = initialState, action) {
  switch (action.type) {
    case ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_PENDING:
      return {
        ...state,
        requestStatus: setRequestPending(state.requestStatus),
      };

    case ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_SUCCESS:
      return {
        ...state,
        requestStatus: setRequestSuccess(state.requestStatus),
        data: action.payload,
      };

    case ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_ERROR:
      return {
        ...state,
        requestStatus: setRequestError(
          state.requestStatus,
          action.errorMessage,
        ),
      };
    case ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_CLEANUP:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
