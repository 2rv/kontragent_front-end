import { ARCTICLE_COMMENT_SEND_ACTION_TYPE } from './article-comment-send.constant';
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

export function articleCommentSendStore(state = initialState, action) {
  switch (action.type) {
    case ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };
    case ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
      };

    case ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };

    case ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_CLEANUP:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
