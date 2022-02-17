export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH =
  '/company/[companyId]/revision/self/create';

export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision/self/create`;

export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME = {
  USE_REF_BALANCE: 'isUseReferalBalance',
  DESCRIPTION: 'description',
  FILE_ID_LIST: 'files',
  YEARS: 'period',
  YEAR: 'year',
  FIRST_PERIOD: 'kvartal1',
  SECOND_PERIOD: 'kvartal2',
  THIRD_PERIOD: 'kvartal3',
  FOURTH_PERIOD: 'kvartal4',
};
export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE = {
  FORM_PENDING:
    'COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS:
    'COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR:
    'COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_ERROR',
  FORM_RESET:
    'COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ACTION_TYPE.FORM_RESET',
};
