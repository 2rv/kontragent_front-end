import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME as FIELD_NAME } from './company-account-item-revision-self-create.constant';

export function convertCompanyAccountItemRevisionSelfCreateFormData(values) {
  return {
    [FIELD_NAME.DESCRIPTION]: values[FIELD_NAME.DESCRIPTION],
    [FIELD_NAME.FILE_ID_LIST]: values[FIELD_NAME.FILE_ID_LIST],
    [FIELD_NAME.YEARS]: values[FIELD_NAME.YEARS].map((year) => ({
      [FIELD_NAME.YEAR]: year[FIELD_NAME.YEAR],
      [FIELD_NAME.FIRST_PERIOD]: year[FIELD_NAME.FIRST_PERIOD],
      [FIELD_NAME.SECOND_PERIOD]: year[FIELD_NAME.SECOND_PERIOD],
      [FIELD_NAME.THIRD_PERIOD]: year[FIELD_NAME.THIRD_PERIOD],
      [FIELD_NAME.FOURTH_PERIOD]: year[FIELD_NAME.FOURTH_PERIOD],
    })),
  };
}

export function getCompanyAccountItemRevisionSelfPrice(years) {
  return years.reduce((acc, period) => {
    if (period[FIELD_NAME.FIRST_PERIOD]) {
      acc += 500;
    }
    if (period[FIELD_NAME.SECOND_PERIOD]) {
      acc += 500;
    }
    if (period[FIELD_NAME.THIRD_PERIOD]) {
      acc += 500;
    }
    if (period[FIELD_NAME.FOURTH_PERIOD]) {
      acc += 500;
    }
    return acc;
  }, 0);
}
