import { validate } from '../../main/validate';
import { SUPPORT_CREATE_REQUEST_FIELD_NAME } from './support-create-request.type';
import { required } from '../../main/validate/validate.service';

const config = {
  [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_OUTLINE]: [required],
  [SUPPORT_CREATE_REQUEST_FIELD_NAME.PROBLEM_DESCRIPTION]: [required],
};

export const supportCreateRequestFormValidation = (values) =>
  validate(values, config);
