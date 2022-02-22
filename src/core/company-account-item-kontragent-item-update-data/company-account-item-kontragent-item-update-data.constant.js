export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ROUTE_PATH =
  '/company/[companyId]/kontragent/[kontragentId]/update';

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ROUTE_PATH_DYNAMIC =
  (
    { companyId, kontragentId } = {
      companyId: '[companyId]',
      kontragentId: '[kontragentId]',
    },
  ) => `/company/${companyId}/kontragent/${kontragentId}/update`;

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_API = {
  UPDATE_KONTRAGENT: {
    ENDPOINT: (companyId, kontragentId) =>
      `/kontragent/info/${companyId}/${kontragentId}`,
    TYPE: 'PATCH',
  },
};

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_FIELD_NAME = {
  RATING: 'rating',
  EMAIL: 'email',
  COMMENT: 'comment',
  CONTACT_INFO: 'contactInfo',
};

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ACTION_TYPE = {
  FORM_PENDING:
    'COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS:
    'COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR:
    'COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_UPDATE_DATA_ACTION_TYPE.FORM_ERROR',
};
