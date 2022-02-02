import { convertFormatDate } from '../../lib/common/convert/convert.core';
import { ADMIN_REVISION_SELF_LIST_DATA_NAME as DATA_NAME } from './admin-revision-self-list.constant';

export const convertAdminRevisionSelfList = (row) => {
  return row[DATA_NAME.LIST].map((revision) => ({
    [DATA_NAME.ID]: revision[DATA_NAME.ID],
    [DATA_NAME.PRICE]: revision[DATA_NAME.PRICE],
    [DATA_NAME.STATUS]: revision[DATA_NAME.STATUS],
    [DATA_NAME.CREATE_DATE]: convertFormatDate(revision[DATA_NAME.CREATE_DATE]),
  }));
};
