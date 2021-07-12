import { httpRequest } from '../../main/http';
import { SETTINGS_2FA_ACTION_TYPE } from './settings-2fa.type';
import { SETTINGS_2FA_API } from './settings-2fa.constant';
import { SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH } from './settings-2fa.constant';

export function settings2FAFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: SETTINGS_2FA_ACTION_TYPE.SETTINGS_2FA_FORM_UPLOAD_PENDING,
    });

    try {
      dispatch({
        type: SETTINGS_2FA_ACTION_TYPE.SETTINGS_2FA_FORM_UPLOAD_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SETTINGS_2FA_ACTION_TYPE.SETTINGS_2FA_FORM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
