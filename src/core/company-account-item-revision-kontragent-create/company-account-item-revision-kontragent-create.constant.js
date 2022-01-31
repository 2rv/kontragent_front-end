export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH =
  '/company/[companyId]/revision/kontragent/create';

export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH_DYNAMIC =
  (
    { companyId } = {
      companyId: '[companyId]',
    },
  ) => `/company/${companyId}/revision/kontragent/create`;

export const COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME = {
  FILE_ID_LIST: 'fileIdList',
  KONTRAGENTS: 'kontragents',

  TITLE: 'title',
  DESCRIPTION: 'description',
  INN: 'inn',
  NAME: 'name',

  YEAR: 'year',
  YEARS: 'years',

  FIRST_PERIOD: 'firstPeriod',
  SECOND_PERIOD: 'secondPeriod',
  THIRD_PERIOD: 'thirdPeriod',
  FOURTH_PERIOD: 'fourthPeriod',
};
