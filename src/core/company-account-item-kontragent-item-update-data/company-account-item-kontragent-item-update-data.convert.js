import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_FIELD_NAME as FIELD_NAME } from './company-account-item-kontragent-item-update-data.constant';

export function covertCompanyAccountItemKontragentItemUpdateDataData(data) {
  return {
    [FIELD_NAME.EMAIL]: data[FIELD_NAME.EMAIL],
    [FIELD_NAME.COMMENT]: data[FIELD_NAME.COMMENT],
    [FIELD_NAME.RATING]: +data[FIELD_NAME.RATING],
  };
}
