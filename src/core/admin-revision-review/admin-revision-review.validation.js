import { validate } from '../../main/validate';
import { ADMIN_REVISION_REVIEW_DATA_NAME } from './admin-revision-review.constant';
import { numberPositiveMin } from '../../main/validate/validate.service';

const config = {
  [ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]: [numberPositiveMin(0)],
};

export const adminRevisionReviewValidation = (values) => {
  validate(values, config);
};
