import { httpRequest } from '../../main/http';
import { ARTICLE_ACTION_TYPE } from './article-view.type';
import { ARTICLE_API } from './article-view.constant';
import { performArticleView } from './article-view.convert';

export function articleLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: ARTICLE_API.ARTICLE_LOAD.TYPE,
        url: ARTICLE_API.ARTICLE_LOAD.ENDPOINT(id),
      });
      const data = performArticleView(res.data);

      dispatch({
        type: ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS,
        data,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function resetArticleViewDataFormState() {
  return async (dispatch) => {
    dispatch({
      type: ARTICLE_ACTION_TYPE.FORM_RESET,
    });
  };
}
