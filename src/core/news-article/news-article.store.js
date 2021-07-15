import { NEWS_ARTICLE_ACTION_TYPE } from './news-article.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  newsArticleContent: initRequestState(),
};

export function newsArticleStore(state = initialState, action) {
  switch (action.type) {
    case NEWS_ARTICLE_ACTION_TYPE.NEWS_ARTICLE_LOAD_REQUEST_PENDING:
      return {
        ...state,
        newsArticleContent: setRequestPending(state.newsArticleContent),
      };

    case NEWS_ARTICLE_ACTION_TYPE.NEWS_ARTICLE_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        newsArticleContent: setRequestSuccess(
          state.newsArticleContent,
          action.data,
        ),
      };

    case NEWS_ARTICLE_ACTION_TYPE.NEWS_ARTICLE_LOAD_REQUEST_ERROR:
      return {
        ...state,
        newsArticleContent: setRequestError(
          state.newsArticleContent,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
