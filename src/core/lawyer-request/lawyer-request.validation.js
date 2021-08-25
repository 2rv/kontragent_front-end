import { NEW_LAWYER_REQUEST_FIELD_NAME } from './lawyer-request.type';

import { validate } from '../../main/validate';
import { required } from '../../main/validate/validate.service';

const config = {
  [NEW_LAWYER_REQUEST_FIELD_NAME.QUESTION_CATEGORY]: [required],
  [NEW_LAWYER_REQUEST_FIELD_NAME.YOUR_QUESTION]: [required],
  [NEW_LAWYER_REQUEST_FIELD_NAME.PROBLEM_DESCRIPTION]: [required],
};

export const newLawyerRequestFormValidation = (values) =>
  validate(values, config);
