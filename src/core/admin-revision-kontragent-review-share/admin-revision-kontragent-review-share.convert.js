import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as FIELD_NAME } from '../admin-revision-kontragent-item/admin-revision-kontragent-item.constant';

export const convertAdminRevisionKontragentReviewShareFormData = (data) => {
  return {
    [FIELD_NAME.ID]: data[FIELD_NAME.ID],
    [FIELD_NAME.CREATE_DATE]: data[FIELD_NAME.CREATE_DATE],
    [FIELD_NAME.COMPANY_INN]: data[FIELD_NAME.COMPANY_INN],
    [FIELD_NAME.COMPANY_NAME]: data[FIELD_NAME.COMPANY_NAME],
    [FIELD_NAME.PRICE]: data[FIELD_NAME.PRICE],
  };
};
