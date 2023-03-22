import { validate } from '../../main/validate';
import { required, getError } from '../../main/validate/validate.service';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME as DATA_NAME } from './company-account-item-revision-self-create.constant';

const yearsArrayValidation = (yearsArray) => {
  const errors = yearsArray.reduce((acc, year) => {
    let error = {};
    if (!year[DATA_NAME.YEAR]) {
      error = {
        [DATA_NAME.YEAR]: getError(
          'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.ERRORS.YEAR',
        ),
      };
    } else if (
      !year[DATA_NAME.FIRST_PERIOD] &&
      !year[DATA_NAME.SECOND_PERIOD] &&
      !year[DATA_NAME.THIRD_PERIOD] &&
      !year[DATA_NAME.FOURTH_PERIOD]
    ) {
      error = {
        [DATA_NAME.YEAR]: getError(
          'COMPANY_ACCOUNT_ITEM_REVISION.SELF.CREATE_PERIOD_LIST.ERRORS.QUARTER',
        ),
      };
    }
    acc.push(error);
    return acc;
  }, []);

  const isError = errors.some((year) => Object.keys(year).length);
  if (isError) {
    return errors;
  } else return null;
};

const config = {
  [DATA_NAME.DESCRIPTION]: [required],
  [DATA_NAME.YEARS]: [yearsArrayValidation],
};

export const companyAccountItemRevisionSelfCreateFormValidation = (values) =>
  validate(values, config);
