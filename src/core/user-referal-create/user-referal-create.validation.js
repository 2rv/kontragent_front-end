import { validate } from '../../main/validate';

import { USER_REFERAL_CREATE_DATA_NAME } from './user-referal-create.constant';

import { email, required } from '../../main/validate/validate.service';

const config = {
  [USER_REFERAL_CREATE_DATA_NAME.EMAIL]: [required, email],
};

export const userReferalCreateFormValidation = (values) =>
  validate(values, config);
