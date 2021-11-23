import { httpRequest } from '../../main/http';
import { CREATE_ARTICLE_ACTION_TYPE } from './article-create.type';
import { CREATE_ARTICLE_API } from './article-create.constant';
import { redirect } from '../../main/navigation/navigation.core';
import { ADMIN_POST_LIST_ROUTE_PATH } from '../admin-post-list';

export function createArticleUploadData(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_PENDING,
      });
      await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT,
        data: data,
      });

      await redirect(ADMIN_POST_LIST_ROUTE_PATH).then(() => {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS,
        });
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
