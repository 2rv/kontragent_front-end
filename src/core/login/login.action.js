import { httpRequest } from '../../main/http';

import { LOGIN_ACTION_TYPE } from './login.type';
import { LOGIN_API } from './login.constant';

import { authSetData } from '../../lib/common/auth/auth.action'
import { LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH } from './login.constant'
import { redirect } from '../../main/navigation/navigation.core'

export function loginFormUploadData(data) {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_PENDING,
    });

    try {
      const res = await httpRequest({
        method: LOGIN_API.LOGIN_FORM_UPLOAD.TYPE,
        url: LOGIN_API.LOGIN_FORM_UPLOAD.ENDPOINT,
        data,
      });

      dispatch(authSetData(res.data.accessToken));

      dispatch({
        type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_SUCCESS,
      });

      redirect(LOGIN_FORM_REDIRECT_ON_UPLOAD_PATH);
    } catch (error) {
      if (error) {
        dispatch({
          type: LOGIN_ACTION_TYPE.LOGIN_FORM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
