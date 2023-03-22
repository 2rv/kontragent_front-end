import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
  resetRequestStatus,
} from '../../main/store/store.service';
import { ADMIN_REVISION_KONTRAGENT_REVIEW_CREATE_ACTION_TYPE as ACTION_TYPE } from './admin-revision-kontragent-review-create.constant';

export const initialState = {
  form: initRequestState(),
};

export function adminRevisionKontragentReviewCreateReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ACTION_TYPE.FORM_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.form),
      };

    default:
      return state;
  }
}
