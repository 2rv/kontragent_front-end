import { httpRequest } from '../../main/http';
import { ARTICLE_COMMENT_DELETE_ACTION_TYPE } from './article-comment-delete.constant';

export function ArticleCommentDelete(commentId, itemIndex) {
  return async (dispatch) => {
    dispatch({
      type: ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_PENDING,
    });

    try {
      await httpRequest({
        method: 'DELETE',
        url: `/comment/delete/${commentId}`,
      });

      dispatch({
        type: ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_SUCCESS,
        payload: itemIndex,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function cleanupStore() {
  return {
    type: ARTICLE_COMMENT_DELETE_ACTION_TYPE.DELETE_CLEANUP,
  };
}
