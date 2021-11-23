import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
  resetRequestStatus
} from '../../main/store/store.service';
import { EDIT_ARTICLE_ACTION_TYPE } from './article-edit.type';

const initialState = {
  article: initRequestState(),
  updateArticle: initRequestState(),
  deleteArticle: initRequestState(),
};

export function editArticleStore(state = initialState, action) {
  switch (action.type) {
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING:
      return {
        ...state,
        article: setRequestPending(state.article),
      };
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS:
      return {
        ...state,
        article: setRequestSuccess(state.article, action.data),
      };
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR:
      return {
        ...state,
        article: setRequestError(state.article, action.errorMessage),
      };

    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_PENDING:
      return {
        ...state,
        updateArticle: setRequestPending(state.updateArticle),
      };
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_SUCCESS:
      return {
        ...state,
        updateArticle: setRequestSuccess(state.updateArticle),
      };
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_ERROR:
      return {
        ...state,
        updateArticle: setRequestError(
          state.updateArticle,
          action.errorMessage,
        ),
      };

    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_PENDING:
      return {
        ...state,
        deleteArticle: setRequestPending(state.deleteArticle),
      };
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_SUCCESS:
      return {
        ...state,
        deleteArticle: setRequestSuccess(state.deleteArticle),
      };
    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_ERROR:
      return {
        ...state,
        deleteArticle: setRequestError(
          state.deleteArticle,
          action.errorMessage,
        ),
      };

    case EDIT_ARTICLE_ACTION_TYPE.ARTICLE_RESET:
      return {
        ...state,
        form: resetRequestStatus(state.article),
      };


    default:
      return state;
  }

}
