import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../main/store/store.service';
import { ARTICLE_ACTION_TYPE } from './article-view.type';

const initialState = {
  article: initRequestState(),
};

export function articleStore(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING:
      return {
        ...state,
        article: setRequestPending(state.article),
      };
    case ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS:
      return {
        ...state,
        article: setRequestSuccess(state.article, action.data),
      };
    case ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR:
      return {
        ...state,
        article: setRequestError(state.article, action.errorMessage),
      };

    default:
      return state;
  }
}
