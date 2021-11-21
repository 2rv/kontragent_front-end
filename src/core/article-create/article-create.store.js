import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { CREATE_ARTICLE_ACTION_TYPE } from './article-create.type';

const initialState = {
  createArticle: initRequestState(),
  product: initRequestState(),
  updateArticle: initRequestState(),
  deleteArticle: initRequestState(),
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

    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING:
      return {
        ...state,
        product: setRequestPending(state.product),
      };
    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS:
      return {
        ...state,
        product: setRequestSuccess(state.product, action.data),
      };
    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR:
      return {
        ...state,
        product: setRequestError(state.product, action.errorMessage),
      };

    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_PENDING:
      return {
        ...state,
        updateArticle: setRequestPending(state.updateArticle),
      };
    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_SUCCESS:
      return {
        ...state,
        updateArticle: setRequestSuccess(state.updateArticle),
      };
    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_ERROR:
      return {
        ...state,
        updateArticle: setRequestError(
          state.updateArticle,
          action.errorMessage,
        ),
      };

    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_PENDING:
      return {
        ...state,
        deleteArticle: setRequestPending(state.deleteArticle),
      };
    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_SUCCESS:
      return {
        ...state,
        deleteArticle: setRequestSuccess(state.deleteArticle),
      };
    case CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_ERROR:
      return {
        ...state,
        deleteArticle: setRequestError(state.deleteArticle, action.errorMessage),
      };
    default:
      return state;
  }
}
