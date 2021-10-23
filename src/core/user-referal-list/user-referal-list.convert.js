import { USER_REFERAL_LIST_DATA_NAME } from './user-referal-list.constant';

export const performUserReferalListRowData = (row) => {
  return row.map((referalMember) => ({
    [USER_REFERAL_LIST_DATA_NAME.FIRSTNAME]:
      referalMember[USER_REFERAL_LIST_DATA_NAME.USER][
        USER_REFERAL_LIST_DATA_NAME.FIRSTNAME
      ],
    [USER_REFERAL_LIST_DATA_NAME.LASTNAME]:
      referalMember[USER_REFERAL_LIST_DATA_NAME.USER][
        USER_REFERAL_LIST_DATA_NAME.LASTNAME
      ],
    [USER_REFERAL_LIST_DATA_NAME.CREATE_DATE]:
      referalMember[USER_REFERAL_LIST_DATA_NAME.CREATE_DATE],
  }));
};
