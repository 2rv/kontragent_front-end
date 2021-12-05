export const COMPANY_ADMIN_BILL_LIST_ROUTE_PATH =
  '/admin/company/[companyId]/bill-list';
export const COMPANY_ADMIN_BILL_LIST_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `admin/company/${companyId}/bill-list`;

export const COMPANY_ADMIN_BILL_LIST_DATA_NAME = {
  LIST: 'list',
  ID: 'id',
  AMOUNT: 'amount',
  CREATE_DATE: 'createDate',
  STATUS: 'status',
  NAME: 'name',
  COMPANY: 'company',
};

export const BILL_STATUS = {
  NEW: 1,
  FILLED: 2,
  FULFILLED: 3,
};
