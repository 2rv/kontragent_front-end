import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import { ADMIN_REVISION_REVIEW_ACTION_TYPE } from './admin-revision-review.constant';
import { reloadAdminRevisionInfoData } from '../admin-revision-info/admin-revision-info.action';

export function changeAdminRevisionReview(data) {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_PENDING,
    });

    try {
      const res = await httpRequest({
        method: 'PATCH',
        url: `revision/review/${getQuery('revisionId')}`,
        data,
      });

      dispatch({
        type: ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_SUCCESS,
      });
      await dispatch(reloadAdminRevisionInfoData());
    } catch (error) {
      if (error) {
        dispatch({
          type: ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}

export function resetAdminRevisionReviewUpdateDataFromState() {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_REVISION_REVIEW_ACTION_TYPE.FORM_RESET,
    });
  };
}
