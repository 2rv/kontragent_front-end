import { convertFormatDate } from '../../lib/common/convert/convert.core';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_KONTRAGENT_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-item.constant';

export const convertCompanyAccountItemRevisionKontragentItemData = (data) => {
  return {
    [DATA_NAME.ID]: data[DATA_NAME.ID],
    [DATA_NAME.CREATE_DATE]: convertFormatDate(data[DATA_NAME.CREATE_DATE]),
    [DATA_NAME.PRICE]: data[DATA_NAME.PRICE],
    [DATA_NAME.STATUS]: data[DATA_NAME.STATUS],
    [DATA_NAME.REVIEW]: data[DATA_NAME.REVIEW],
    [DATA_NAME.FILES_REVIEW]: data[DATA_NAME.FILES_REVIEW],
    [DATA_NAME.REVISION_KONTRAGENT]: data[DATA_NAME.REVISION_KONTRAGENT].map(
      (kontragent) => {
        return {
          [DATA_NAME.ID]: kontragent[DATA_NAME.ID],
          [DATA_NAME.DESCRIPRION]: kontragent[DATA_NAME.DESCRIPRION],
          [DATA_NAME.PERIOD]: kontragent[DATA_NAME.PERIOD],
          [DATA_NAME.FILES]: kontragent[DATA_NAME.FILES],
          [DATA_NAME.NAME]: kontragent[DATA_NAME.KONTRAGENT]?.[DATA_NAME.NAME],
        };
      },
    ),
  };
};
