export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_DATA_NAME = {
  NAME: 'name',
  INN: 'inn',
};

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_API = {
  CREATE_COMPANY_ACCOUNT_KONTRAGENT: {
    ENDPOINT: (companyId) =>
      `/kontragent/company/${companyId}/create/kontragent`,
    TYPE: 'POST',
  },
};

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE = {
  FORM_PENDING:
    'COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS:
    'COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_ERROR',
  FORM_RESET: 'COMPANY_ACCOUNT_ITEM_KONTRAGENT_CREATE_ACTION_TYPE.FORM_RESET',
};