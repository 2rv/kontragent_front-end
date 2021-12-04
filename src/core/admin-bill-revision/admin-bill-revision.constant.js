export const ADMIN_BILL_REVISION_ROUTE_PATH = '/admin/bill/[billId]';
export const ADMIN_BILL_REVISION_ROUTE_PATH_DYNAMIC = (
  { billId } = {
    billId: '[billId]',
  },
) => `/admin/bill/${billId}`;

export const ADMIN_BILL_REVISION_DATA_NAME = {
  DESCRIPTION: 'description',
  STATUS: 'status',
  FILES: 'files',
};

export const ADMIN_BILL_REVISION_STORE_NAME = 'ADMIN_BILL_REVISION';

export const ADMIN_BILL_REVISION_ACTION_TYPE = {
  FORM_PENDING: 'ADMIN_BILL_REVISION_ACTION_TYPE.FORM_PENDING',
  FORM_SUCCESS: 'ADMIN_BILL_REVISION_ACTION_TYPE.FORM_SUCCESS',
  FORM_ERROR: 'ADMIN_BILL_REVISION_ACTION_TYPE.FORM_ERROR',
  FORM_RESET: 'ADMIN_BILL_REVISION_ACTION_TYPE.FORM_RESET',
};
