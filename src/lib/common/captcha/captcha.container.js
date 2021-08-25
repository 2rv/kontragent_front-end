import { useEffect } from 'react';
import { captchaLoadCaptcha } from './captcha.action';
import { CAPTCHA_STORE_NAME, CAPTCHA_DATA_NAME } from './captcha.constant';
import { CaptchaFieldComponent } from './captcha.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../main/store/store.service';

export function CaptchaFieldContainer(props) {
  const { titleTid, placeholderTid, name, onChange, onBlur, value, error } =
    props;
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({
    state: state[CAPTCHA_STORE_NAME],
  }));

  const captchaLoadCaptchaImage = () => {
    dispatch(captchaLoadCaptcha());
  };
  useEffect(() => {
    // captchaLoadCaptchaImage();
  }, []);

  const captchaData = state.captchaGetImage.data?.[CAPTCHA_DATA_NAME.CAPTCHA];
  return (
    <CaptchaFieldComponent
      captchaLoading={isRequestPending(state.captchaGetImage)}
      captchaError={isRequestError(state.captchaGetImage)}
      captchaErrorMessage={getRequestErrorMessage(state.captchaGetImage)}
      captchaSuccess={isRequestSuccess(state.captchaGetImage)}
      captcha={captchaData}
      loadCaptcha={captchaLoadCaptchaImage}
      titleTid={titleTid}
      placeholderTid={placeholderTid}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={error}
    />
  );
}
