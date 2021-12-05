import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ARCTICLE_COMMENT_SEND_ACTION_TYPE } from './article-comment-send.constant';

export function changeArticleCommentSend(data, resetForm) {
  return async (dispatch) => {
    dispatch({
      type: ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `comment/create/${getQuery('articleId')}`,
        data,
      });

      dispatch({
        type: ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_SUCCESS,
      });
      resetForm();
    } catch (error) {
      if (error) {
        dispatch({
          type: ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_CLEANUP,
  };
}
