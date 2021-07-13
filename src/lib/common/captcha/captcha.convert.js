import { CAPTCHA_DATA_NAME, CAPTCHA_DATA_KEY } from './captcha.constant';
export const performCaptchaData = (rawdata) => ({
  [CAPTCHA_DATA_NAME.CAPTCHA]: rawdata[CAPTCHA_DATA_KEY.CAPTCHA],
});
