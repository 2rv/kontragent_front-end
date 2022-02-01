import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME } from './company-account-item-kontragent-item-info.constant';

export const covertCompanyAccountItemKontragentItemInfoData = (data) => ({
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.ID]:
    data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.ID],
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.KONTRAGENT_NAME]:
    data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.NAME],
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_ID]:
    data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.CONTRACTOR][
      COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.ID
    ],
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.INN]:
    data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.CONTRACTOR][
      COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.INN
    ],
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_NAME]:
    data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.CONTRACTOR][
      COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.NAME
    ],
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_REGISTERED]:
    data[COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.CONTRACTOR][
      COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME.COMPANY_REGISTERED
    ],
});
