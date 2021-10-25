import { COMPANY_ACCOUNT_LIST_DATA_NAME } from './company-account-list.constant';

export const performCompanyAccountListRowData = (row) => {
  return row[COMPANY_ACCOUNT_LIST_DATA_NAME.LIST].map((company) => ({
    [COMPANY_ACCOUNT_LIST_DATA_NAME.ID]:
      company[COMPANY_ACCOUNT_LIST_DATA_NAME.ID],
    [COMPANY_ACCOUNT_LIST_DATA_NAME.NAME]:
      company[COMPANY_ACCOUNT_LIST_DATA_NAME.NAME],
    [COMPANY_ACCOUNT_LIST_DATA_NAME.COMPANY_MEMBER_ROLE]:
      company[COMPANY_ACCOUNT_LIST_DATA_NAME.COMPANY_MEMBER][0][
        COMPANY_ACCOUNT_LIST_DATA_NAME.COMPANY_MEMBER_ROLE
      ],
  }));
};