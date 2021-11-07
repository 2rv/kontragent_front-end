import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME } from './company-account-item-revision-item.constant';

export const performCompanyAccountItemRevisionItemData = (row) => ({
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.DESCRIPRION]:
    row[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.DESCRIPRION],
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_DESCRIPRION]:
    row[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_DESCRIPRION],
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVIEW]:
    row[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.REVIEW],
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_REVIEW]:
    row[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.FILE_REVIEW],
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.STATUS]:
    row[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.STATUS],
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.PRICE]:
    row[COMPANY_ACCOUNT_ITEM_REVISION_ITEM_DATA_NAME.PRICE],
});
