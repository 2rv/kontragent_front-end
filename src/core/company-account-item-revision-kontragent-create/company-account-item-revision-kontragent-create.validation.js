import { validate } from '../../main/validate/validate.core';
import { required } from '../../main/validate/validate.service';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-create.constant';

const yearsArrayValidation = (yearsArray) => {
  const errors = yearsArray.reduce((acc, year) => {
    let error = {};
    if (!year[DATA_NAME.YEAR]) {
      error = { [DATA_NAME.YEAR]: 'Необходимо выбрать год' };
    } else if (
      !year[DATA_NAME.FIRST_PERIOD] &&
      !year[DATA_NAME.SECOND_PERIOD] &&
      !year[DATA_NAME.THIRD_PERIOD] &&
      !year[DATA_NAME.FOURTH_PERIOD]
    ) {
      error = { [DATA_NAME.YEAR]: 'Необходимо выбрать квартал' };
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
  [DATA_NAME.KONTRAGENT_ID]: [required],
  [DATA_NAME.DESCRIPTION]: [required],
  [DATA_NAME.YEARS]: [yearsArrayValidation],
};

export function CompanyAccountItemRevisionKontragentCreateFormValidation(
  values,
) {
  const errors = values[DATA_NAME.KONTRAGENTS].reduce((acc, kontragent) => {
    acc.push(validate(kontragent, config));
    return acc;
  }, []);
  const isError = errors.some((year) => Object.keys(year).length);
  if (isError) {
    return {
      [DATA_NAME.KONTRAGENTS]: errors,
    };
  } else {
    return {};
  }
}
