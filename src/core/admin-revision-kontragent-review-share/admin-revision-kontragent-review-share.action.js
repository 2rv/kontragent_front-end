import { httpRequest } from '../../main/http';
import { ADMIN_REVISION_KONTRAGENT_REVIEW_SHARE_ACTION_TYPE as ACTION_TYPE } from './admin-revision-kontragent-review-share.constant';

export function uploadAdminRevisionKontragentReviewShareFormData(data) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.FORM_PENDING,
    });

    try {
      await httpRequest({
        method: 'POST',
        url: `revision-share/kontragent/${data.revisionId}`,
        data: data,
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
