import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as FIELD_NAME } from '../admin-revision-kontragent-item/admin-revision-kontragent-item.constant';

export const convertAdminRevisionKontragentReviewCreateFormData = (data) => {
  const converted = {};
  if (data[FIELD_NAME.REVIEW]) {
    converted[FIELD_NAME.REVIEW] = data[FIELD_NAME.REVIEW];
  }
  if (data[FIELD_NAME.STATUS]) {
    converted[FIELD_NAME.STATUS] = data[FIELD_NAME.STATUS];
  }
  if (data[FIELD_NAME.PRICE]) {
    converted[FIELD_NAME.PRICE] = Number(data[FIELD_NAME.PRICE]);
  }
  if (!data[FIELD_NAME.FILES_REVIEW].length) {
    converted[FIELD_NAME.FILES_REVIEW] = data[FIELD_NAME.FILES_REVIEW];
  }
  return converted;
};
