import { httpRequest } from '../../main/http';
import { SUPPORT_CREATE_REQUEST_ACTION_TYPE } from './support-create-request.type';
import {
  SUPPORT_CREATE_REQUEST_API,
  SUPPORT_CREATE_REQUEST_FORM_REDIRECT_ON_UPLOAD_PATH,
} from './support-create-request.constant';

export function supportCreateRequestFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SUPPORT_CREATE_REQUEST_ACTION_TYPE.SUPPORT_FORM_CREATE_REQUEST_UPLOAD_PENDING,
    });

    try {
      dispatch({
        type: SUPPORT_CREATE_REQUEST_ACTION_TYPE.SUPPORT_FORM_CREATE_REQUEST_UPLOAD_SUCCESS,
      });

      // redirect(SUPPORT_CREATE_REQUEST_FORM_REDIRECT_ON_UPLOAD_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: SUPPORT_CREATE_REQUEST_ACTION_TYPE.SUPPORT_FORM_CREATE_REQUEST_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
