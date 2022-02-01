export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH =
  '/company/[companyId]/revision-self/create';

export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/revision/self/create`;

export const COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME = {
  DESCRIPTION: 'description',
  FILE_ID_LIST: 'fileIdList',
  YEARS: 'years',
  YEAR: 'year',
  FIRST_PERIOD: 'firstPeriod',
  SECOND_PERIOD: 'secondPeriod',
  THIRD_PERIOD: 'thirdPeriod',
  FOURTH_PERIOD: 'fourthPeriod',
};
