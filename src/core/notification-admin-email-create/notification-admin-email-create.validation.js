import { validate } from '../../main/validate';

import { NOTIFICATION_EMAIL_CREATE_DATA_NAME } from './notification-admin-email-create.constant';

import { required, email } from '../../main/validate/validate.service';

const config = {
  [NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL]: [required, email],
  [NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE]: [required],
};

export const notificationAdminEmailCreateFormValidation = (values) =>
  validate(values, config);
