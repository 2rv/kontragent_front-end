import { ADMIN_REVISION_SELF_ITEM_DATA_NAME as FIELD_NAME } from '../admin-revision-self-item/admin-revision-self-item.constant';

export const convertAdminRevisionSelfReviewCreateFormData = (data) => {
  const converted = {};
  if (data[FIELD_NAME.REVIEW]) {
    converted[FIELD_NAME.REVIEW] = data[FIELD_NAME.REVIEW];
  }
  if (data[FIELD_NAME.STATUS]) {
    converted[FIELD_NAME.STATUS] = data[FIELD_NAME.STATUS];
  }
  if (typeof data[FIELD_NAME.PRICE] === 'number') {
    converted[FIELD_NAME.PRICE] = Number(data[FIELD_NAME.PRICE]);
  }

  converted[FIELD_NAME.FILES_REVIEW] = data[FIELD_NAME.FILES_REVIEW];

  return converted;
};
