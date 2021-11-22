import { ADMIN_REVISION_REVIEW_ACTION_TYPE } from './admin-revision-review.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  resetRequestStatus,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
};

export function adminRevisionReviewStore(state = initialState, action) {
  switch (action.type) {
    case ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.form),
      };

    default:
      return state;
  }
}
