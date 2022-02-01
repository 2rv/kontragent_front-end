import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_KONTRAGENT_LIST_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-create-kontragent-list.constant';

export const convertCompanyAccountItemRevisionKontragentCreateKontragentList = (
  d,
) => {
  return d.map((company) => ({
    [DATA_NAME.ID]: company[DATA_NAME.ID],
    [DATA_NAME.NAME]: company[DATA_NAME.NAME],
    [DATA_NAME.INN]: company[DATA_NAME.CONTRACTOR][DATA_NAME.INN],
  }));
};
