import { validate } from '../../main/validate';
import { email, required } from '../../main/validate/validate.service';
import { SETTINGS_EMAIL_FIELD_NAME } from './settings-notification.type';

const config = {
  [SETTINGS_EMAIL_FIELD_NAME.EMAIL]: [required, email],
};

export const settingsNotificationFormValidation = (values) =>
  validate(values, config);
