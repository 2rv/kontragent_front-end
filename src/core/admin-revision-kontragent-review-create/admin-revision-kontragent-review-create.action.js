import { httpRequest } from '../../main/http';
import { ADMIN_REVISION_KONTRAGENT_REVIEW_CREATE_ACTION_TYPE as ACTION_TYPE } from './admin-revision-kontragent-review-create.constant';

export function uploadAdminRevisionKontragentReviewCreateFormData(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: `/revision/admin/revision/${data.revisionId}/review`,
        data,
      });

      dispatch({
        type: ACTION_TYPE.FORM_SUCCESS,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error) {
        dispatch({
          type: ACTION_TYPE.FORM_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
