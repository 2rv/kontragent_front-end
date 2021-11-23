import { httpRequest } from '../../main/http';
import { CREATE_ARTICLE_ACTION_TYPE } from './article-create.type';
import { CREATE_ARTICLE_API } from './article-create.constant';
import { redirect } from '../../main/navigation/navigation.core';
import { ARTICLE_DYNAMIC_ROUTE_PATH } from '../article-view';

export function createArticleUploadData(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING,
      });
      const res = await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT,
        data: data,
      });

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS,
      });

      await redirect(ARTICLE_DYNAMIC_ROUTE_PATH, {
        dynamic: true,
        params: {
          articleId: res.data.id,
        },
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function resetArticleCreateDataFormState() {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_RESET,
    });
  };
}
