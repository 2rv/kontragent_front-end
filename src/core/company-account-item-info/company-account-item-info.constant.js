export const COMPANY_ACCOUNT_ITEM_INFO_DATA_NAME = {
  ID: 'id',
  NAME: 'name',
  INN: 'inn',
  VERIFICATE_INFO: 'verificateInfo',
  VERIFICATE_PAYMENT: 'verificatePayment',
};

export const COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH = '/company/[companyId]/info';
export const COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/info`;
