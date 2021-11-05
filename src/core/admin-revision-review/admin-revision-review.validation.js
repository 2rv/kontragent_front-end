import { validate } from '../../main/validate';
import { ADMIN_REVISION_REVIEW_DATA_NAME } from './admin-revision-review.constant';
import {
  numberPositiveMin,
  minLength,
} from '../../main/validate/validate.service';

const config = {
  [ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]: [minLength(10)],
  [ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]: [numberPositiveMin(0)],
};

export const adminRevisionReviewValidation = (values) => {
  validate(values, config);
};
