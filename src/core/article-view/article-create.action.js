import { httpRequest } from '../../main/http';
import {
  CREATE_ARTICLE_ACTION_TYPE,
  ARTICLE_FIELD_NAME,
} from './article-create.type';
import { CREATE_ARTICLE_API } from './article-create.constant';
import { convertForCreateUpdate } from './article-create.convert';
// import { redirect } from 'src/main/navigation';

export function createArticleUploadData(formValues) {
  return async (dispatch) => {
    try {
      const data = convertForCreate(formValues);

      await httpRequest({
        method: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.TYPE,
        url: CREATE_ARTICLE_API.CREATE_ARTICLE_UPLOAD.ENDPOINT,
        data: data,
      });

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.CREATE_ARTICLE_UPLOAD_SUCCESS,
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

export function ArticleLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: CREATE_ARTICLE_API.ARTICLE_LOAD.TYPE,
        url: CREATE_ARTICLE_API.ARTICLE_LOAD.ENDPOINT(id),
      });

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS,
        data: convertForCreateUpdate(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateArticle(id, formValues) {
  return async (dispatch) => {
    try {
      const data = convertForCreateUpdate(formValues);
      const response = await httpRequest({
        method: CREATE_ARTICLE_API.ARTICLE_CHANGE.TYPE,
        url: CREATE_ARTICLE_API.ARTICLE_CHANGE.ENDPOINT(id),
        data: data,
      });
      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function articleDelete(id) {
  return async (dispatch) => {
    dispatch({
      type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: CREATE_ARTICLE_API.ARTICLE_DELETE.TYPE,
        url: CREATE_ARTICLE_API.ARTICLE_DELETE.ENDPOINT(id),
      });

      dispatch({
        type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_SUCCESS,
      });

    } catch (err) {
      if (err.response) {
        dispatch({
          type: CREATE_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
