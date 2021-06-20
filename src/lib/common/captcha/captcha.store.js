import { CAPTCHA_ACTION_TYPE } from './captcha.type';
import {
  initRequestState,
  setRequestError,
  setRequestPending,
  setRequestSuccess,
} from '../../../main/store/store.service';

const initialState = {
  captchaGetImage: initRequestState(),
};

export const captchaStore = (state = initialState, action) => {
  switch (action.type) {
    case CAPTCHA_ACTION_TYPE.CAPTCHA_LOAD_PENDING:
      return {
        ...state,
        captchaGetImage: setRequestPending(state.captchaGetImage),
      };

    case CAPTCHA_ACTION_TYPE.CAPTCHA_LOAD_SUCCESS:
      return {
        ...state,
        captchaGetImage: setRequestSuccess(state.captchaGetImage, action.data),
      };

    case CAPTCHA_ACTION_TYPE.CAPTCHA_LOAD_ERROR:
      return {
        ...state,
        captchaGetImage: setRequestError(state.captchaGetImage, action.message),
      };

    default:
      return state;
  }
};