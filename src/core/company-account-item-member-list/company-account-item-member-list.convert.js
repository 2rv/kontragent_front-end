import { COMPANY_ACCOUNT_ITEM_CREATE_BILL_ACTION_TYPE } from '../company-account-item-create-bill/company-account-item-create-bill.constant';
import { COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME } from './company-account-item-member-list.constant';

export const performCompanyAccountItemMemberListData = (row) => {
  return {
    [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LIST]: row[
      COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LIST
    ].map((member) => ({
      [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.ID]:
        member[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.ID],
      [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.FIRSTNAME]:
        member[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.USER][
          COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.FIRSTNAME
        ],
      [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LASTNAME]:
        member[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.USER][
          COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LASTNAME
        ],
      [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LOGIN]:
        member[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.USER][
          COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.LOGIN
        ],
      [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.ROLE]:
        member[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.ROLE],
    })),
    [COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.COMPANY_MEMBER_ROLE]:
      row[COMPANY_ACCOUNT_ITEM_MEMBER_LIST_DATA_NAME.COMPANY_MEMBER_ROLE],
  };
};
