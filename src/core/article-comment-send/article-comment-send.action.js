import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ARCTICLE_COMMENT_SEND_ACTION_TYPE } from './article-comment-send.constant';

export function changeArticleCommentSend(data) {
  return async (dispatch) => {
    dispatch({
      type: ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'POST',
        url: `comment/create`,
        data,
      });

      dispatch({
        type: ARCTICLE_COMMENT_SEND_ACTION_TYPE.FORM_SUCCESS,
      });
      //тут поменять
      //await dispatch(reloadAdminRevisionInfoData());
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
