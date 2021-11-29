import { ARTICLE_COMMENT_DELETE_ACTION_TYPE } from './article-comment-delete.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  form: initRequestState(),
  deletedItemIndex: null,
};

export function articleCommentDeleteStore(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_PENDING:
      return {
        ...state,
        form: setRequestPending(state.form),
      };

    case ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_SUCCESS:
      return {
        ...state,
        form: setRequestSuccess(state.form),
        deletedItemIndex: action.payload,
      };

    case ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_ERROR:
      return {
        ...state,
        form: setRequestError(state.form, action.errorMessage),
      };
    case ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_CLEANUP:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
