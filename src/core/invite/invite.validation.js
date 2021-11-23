import { validate } from '../../main/validate';

import { INVITE_DATA_NAME } from './invite.constant';

import { email, required } from '../../main/validate/validate.service';

const config = {
  [INVITE_DATA_NAME.EMAIL]: [required, email],
};

export const inviteFormValidation = (values) => validate(values, config);
