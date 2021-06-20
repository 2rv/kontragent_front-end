import { httpRequest } from '../../../main/http';
import { CAPTCHA_ACTION_TYPE } from './captcha.type';
import { CAPTCHA_API } from './captcha.constant';
import { performCaptchaData } from './captcha.convert';

export function captchaLoadCaptcha() {
  return async (dispatch) => {
    dispatch({
      type: CAPTCHA_ACTION_TYPE.CAPTCHA_LOAD_PENDING,
    });
    try {
      const res = await httpRequest({
        method: CAPTCHA_API.GENERATE_CAPTCHA.TYPE,
        url: CAPTCHA_API.GENERATE_CAPTCHA.ENDPOINT,
      });
      
      const captcha = performCaptchaData(res.data);
      dispatch({
        type: CAPTCHA_ACTION_TYPE.CAPTCHA_LOAD_SUCCESS,
        data: captcha,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
