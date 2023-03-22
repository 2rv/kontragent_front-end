export const COMPANY_ACCOUNT_BILL_ITEM_ROUTE_PATH =
  '/company/[companyId]/bill/[billId]';

export const COMPANY_ACCOUNT_BILL_ITEM_ROUTE_PATH_DYNAMIC = (
  { companyId, billId } = {
    companyId: '[companyId]',
    billId: '[billId]',
  },
) => `/company/${companyId}/bill/${billId}`;

export const COMPANY_ACCOUNT_BILL_ITEM_DATA_NAME = {
  ID: 'id',
  AMOUNT: 'amount',
  DESCRIPTION: 'description',
  FILES: 'files',
  COMPANY: 'company',
  NAME: 'name',
  INN: 'inn',
};
