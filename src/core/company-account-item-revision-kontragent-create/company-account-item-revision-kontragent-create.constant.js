export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH =
  '/company/[companyId]/revision/kontragent/create';

export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH_DYNAMIC =
  (
    { companyId } = {
      companyId: '[companyId]',
    },
  ) => `/company/${companyId}/revision/kontragent/create`;

export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME = {
  USE_REF_BALANCE: 'isUseReferalBalance',

  NAME: 'name',
  INN: 'inn',

  KONTRAGENTS: 'kontragents',
  DESCRIPTION: 'description',
  FILE_ID_LIST: 'fileIdList',
  KONTRAGENT_ID: 'kontragentId',

  YEARS: 'years',

  YEAR: 'year',
  FIRST_PERIOD: 'kvartal1',
  SECOND_PERIOD: 'kvartal2',
  THIRD_PERIOD: 'kvartal3',
  FOURTH_PERIOD: 'kvartal4',
};
export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ACTION_TYPE = {
  FORM_PENDING:
    'COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS:
    'COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR:
    'COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ACTION_TYPE.FORM_ERROR',
  FORM_RESET:
    'COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ACTION_TYPE.FORM_RESET',
};
