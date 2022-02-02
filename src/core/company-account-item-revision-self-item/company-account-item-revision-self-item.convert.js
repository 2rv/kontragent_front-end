import { convertFormatDate } from '../../lib/common/convert/convert.core';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_DATA_NAME as DATA_NAME } from './company-account-item-revision-self-item.constant';

export const convertCompanyAccountItemRevisionSelfItemData = (data) => {
  return {
    [DATA_NAME.ID]: data[DATA_NAME.ID],
    [DATA_NAME.CREATE_DATE]: convertFormatDate(data[DATA_NAME.CREATE_DATE]),
    [DATA_NAME.PRICE]: data[DATA_NAME.PRICE],
    [DATA_NAME.STATUS]: data[DATA_NAME.STATUS],

    [DATA_NAME.PERIOD]: data[DATA_NAME.PERIOD],
    [DATA_NAME.DESCRIPRION]: data[DATA_NAME.DESCRIPRION],
    [DATA_NAME.FILES]: data[DATA_NAME.FILES],

    [DATA_NAME.REVIEW]: data[DATA_NAME.REVIEW],
    [DATA_NAME.FILES_REVIEW]: data[DATA_NAME.FILES_REVIEW],
  };
};
