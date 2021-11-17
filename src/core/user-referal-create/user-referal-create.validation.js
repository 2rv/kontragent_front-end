import { validate } from '../../main/validate';

import { USER_REFERAL_CREATE_DATA_NAME } from './user-referal-create.constant';

import { required, emailPhone } from '../../main/validate/validate.service';

const config = {
  [USER_REFERAL_CREATE_DATA_NAME.EMAIL]: [required, emailPhone],
};

export const userReferalCreateFormValidation = (values) =>
  validate(values, config);
