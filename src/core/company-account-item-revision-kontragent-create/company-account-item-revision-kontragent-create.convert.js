import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from './company-account-item-revision-kontragent-create.constant';

export function convertCompanyAccountItemRevisionKontragentCreateFormData(
  values,
) {
  return {
    [FIELD_NAME.KONTRAGENTS]: values[FIELD_NAME.KONTRAGENTS].map(
      (kontragent) => ({
        [FIELD_NAME.KONTRAGENT_ID]: kontragent[FIELD_NAME.KONTRAGENT_ID],
        [FIELD_NAME.DESCRIPTION]: kontragent[FIELD_NAME.DESCRIPTION],
        [FIELD_NAME.FILE_ID_LIST]: kontragent[FIELD_NAME.FILE_ID_LIST],
        [FIELD_NAME.YEARS]: kontragent[FIELD_NAME.YEARS].map((year) => ({
          [FIELD_NAME.YEAR]: year[FIELD_NAME.YEAR],
          [FIELD_NAME.FIRST_PERIOD]: year[FIELD_NAME.FIRST_PERIOD],
          [FIELD_NAME.SECOND_PERIOD]: year[FIELD_NAME.SECOND_PERIOD],
          [FIELD_NAME.THIRD_PERIOD]: year[FIELD_NAME.THIRD_PERIOD],
          [FIELD_NAME.FOURTH_PERIOD]: year[FIELD_NAME.FOURTH_PERIOD],
        })),
      }),
    ),
    [FIELD_NAME.USE_REF_BALANCE]: values[FIELD_NAME.USE_REF_BALANCE],
  };
}
