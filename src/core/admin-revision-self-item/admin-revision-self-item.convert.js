import { ADMIN_REVISION_SELF_ITEM_DATA_NAME as DATA_NAME } from './admin-revision-self-item.constant';
import { convertFormatDate } from '../../lib/common/convert/convert.core';

export const convertAdminRevisionSelfItem = (data) => {
  return {
    [DATA_NAME.ID]: data[DATA_NAME.ID],
    [DATA_NAME.CREATE_DATE]: convertFormatDate(data[DATA_NAME.CREATE_DATE]),
    [DATA_NAME.PRICE]: data[DATA_NAME.PRICE],
    [DATA_NAME.PAYMENT_PRICE]: data[DATA_NAME.PAYMENT_PRICE],
    [DATA_NAME.STATUS]: data[DATA_NAME.STATUS],

    [DATA_NAME.PERIOD]: data[DATA_NAME.PERIOD],
    [DATA_NAME.DESCRIPRION]: data[DATA_NAME.DESCRIPRION],
    [DATA_NAME.FILES]: data[DATA_NAME.FILES],

    [DATA_NAME.REVIEW]: data[DATA_NAME.REVIEW],
    [DATA_NAME.FILES_REVIEW]: data[DATA_NAME.FILES_REVIEW],

    [DATA_NAME.COMPANY_ID]: data[DATA_NAME.COMPANY][DATA_NAME.ID],
    [DATA_NAME.COMPANY_NAME]: data[DATA_NAME.COMPANY][DATA_NAME.COMPANY_NAME],
    [DATA_NAME.COMPANY_INN]: data[DATA_NAME.COMPANY][DATA_NAME.COMPANY_INN],

    [DATA_NAME.CREATOR_ID]: data[DATA_NAME.CREATOR][DATA_NAME.ID],
    [DATA_NAME.CREATOR_LOGIN]: data[DATA_NAME.CREATOR][DATA_NAME.CREATOR_LOGIN],
    [DATA_NAME.CREATOR_FIRSTNAME]:
      data[DATA_NAME.CREATOR][DATA_NAME.CREATOR_FIRSTNAME],
    [DATA_NAME.CREATOR_LASTNAME]:
      data[DATA_NAME.CREATOR][DATA_NAME.CREATOR_LASTNAME],
  };
};
