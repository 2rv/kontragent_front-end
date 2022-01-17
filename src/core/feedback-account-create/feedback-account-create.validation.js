import { validate } from '../../main/validate';

import { FEEDBACK_ACCOUNT_CREATE_DATA_NAME } from './feedback-account-create.constant';

import { required } from '../../main/validate/validate.service';

const config = {
  [FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE]: [required],
  [FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION]: [required],
};

export const feedbackAccountCreateFormValidation = (values) =>
  validate(values, config);
