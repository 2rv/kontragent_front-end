import { httpRequest } from '../../main/http';
import { EDIT_ARTICLE_ACTION_TYPE } from './article-edit.type';
import { EDIT_ARTICLE_API } from './article-edit.constant';
import { convertForEdit } from './article-edit.convert';

export function articleLoadData(id) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_PENDING,
    });

    try {
      const response = await httpRequest({
        method: EDIT_ARTICLE_API.ARTICLE_LOAD.TYPE,
        url: EDIT_ARTICLE_API.ARTICLE_LOAD.ENDPOINT(id),
      });

      dispatch({
        type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_SUCCESS,
        data: convertForEdit(response.data),
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_LOAD_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function updateArticle(id, data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_PENDING,
      });

      await httpRequest({
        method: EDIT_ARTICLE_API.ARTICLE_CHANGE.TYPE,
        url: EDIT_ARTICLE_API.ARTICLE_CHANGE.ENDPOINT(id),
        data: data,
      });

      dispatch({
        type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_UPDATE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}

export function articleDelete(id) {
  return async (dispatch) => {
    dispatch({
      type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: EDIT_ARTICLE_API.ARTICLE_DELETE.TYPE,
        url: EDIT_ARTICLE_API.ARTICLE_DELETE.ENDPOINT(id),
      });

      dispatch({
        type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_SUCCESS,
      });
    } catch (err) {
      if (err.response) {
        dispatch({
          type: EDIT_ARTICLE_ACTION_TYPE.ARTICLE_DELETE_ERROR,
          errorMessage: err.response.data.message,
        });
      }
    }
  };
}
