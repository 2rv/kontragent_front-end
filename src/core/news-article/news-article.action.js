import { httpRequest } from '../../main/http';

import { NEWS_ARTICLE_ACTION_TYPE } from './news-article.type';
import { NEWS_ARTICLE_API } from './news-article.constant';

export function newsArticleContentLoad() {
  return async (dispatch) => {
    dispatch({
      type: NEWS_ARTICLE_ACTION_TYPE.NEWS_ARTICLE_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: NEWS_ARTICLE_API.NEWS_ARTICLE_LOAD_DATA.TYPE,
        url: NEWS_ARTICLE_API.NEWS_ARTICLE_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: NEWS_ARTICLE_ACTION_TYPE.NEWS_ARTICLE_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: NEWS_ARTICLE_ACTION_TYPE.NEWS_ARTICLE_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
