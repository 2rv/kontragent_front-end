import { USER_REFERAL_LIST_DATA_NAME } from './user-referal-list.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const performUserReferalListRowData = (row) => {
  return row.map((referalMember) => ({
    [USER_REFERAL_LIST_DATA_NAME.ID]:
      referalMember[USER_REFERAL_LIST_DATA_NAME.ID],
    [USER_REFERAL_LIST_DATA_NAME.FIRSTNAME]:
      referalMember[USER_REFERAL_LIST_DATA_NAME.USER][
        USER_REFERAL_LIST_DATA_NAME.FIRSTNAME
      ],
    [USER_REFERAL_LIST_DATA_NAME.LASTNAME]:
      referalMember[USER_REFERAL_LIST_DATA_NAME.USER][
        USER_REFERAL_LIST_DATA_NAME.LASTNAME
      ],

    [USER_REFERAL_LIST_DATA_NAME.CREATE_DATE]: convertFormatDate(
      referalMember[USER_REFERAL_LIST_DATA_NAME.CREATE_DATE],
    ),
  }));
};
