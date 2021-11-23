import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
  resetRequestStatus
} from '../../main/store/store.service';
import { CREATE_ARTICLE_ACTION_TYPE } from './article-create.type';

const initialState = {
  createArticle: initRequestState(),
};

export function createArticleStore(state = initialState, action) {
  switch (action.type) {
    case CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING:
      return {
        ...state,
        createArticle: setRequestPending(state.createArticle),
      };
    case CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS:
      return {
        ...state,
        createArticle: setRequestSuccess(state.createArticle),
      };
    case CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR:
      return {
        ...state,
        createArticle: setRequestError(
          state.createArticle,
          action.errorMessage,
        ),
      };

    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.createArticle),
      };

    default:
      return state;
  }
}
