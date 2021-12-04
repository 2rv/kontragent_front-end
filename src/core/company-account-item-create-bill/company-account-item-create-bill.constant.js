export const COMPANY_ACCOUNT_ITEM_CREATE_BILL_DATA_NAME = {
  AMOUNT: 'amount',
};

export const COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH =
  '/company/[companyId]/bill';
export const COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/bill`;
