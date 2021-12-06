export const COMPANY_ACCOUNT_KONTRAGENT_INFO_DATA_NAME = {
  ID: 'id',
  NAME: 'name',
  INN: 'inn',
  COMPANY_ID: 'companyId',
  COMPANY_NAME: 'companyName',
  KONTRAGENT_NAME: 'kontragentName',
  COMPANY_REGISTERED: 'registered',
  CONTRACTOR: 'contractor',
  CONSUMER: 'consumer',
};

export const COMPANY_ACCOUNT_KONTRAGENT_INFO_ROUTE_PATH = '/company/[companyId]/kontragent/[kontragentId]';
export const COMPANY_ACCOUNT_KONTRAGENT_INFO_ROUTE_PATH_DYNAMIC = (
  { companyId, kontragentId } = {
    companyId: '[companyId]',
    kontragentId: '[kontragentId]',
  },
) => `/company/${companyId}/kontragent/${kontragentId}`;

export const COMPANY_ACCOUNT_KONTRAGENT_INFO_API = {
  FETCH_KONTRAGENT: {
    ENDPOINT: (companyId, kontragentId) => `/kontragent/getone/company/${companyId}/${kontragentId}`,
    TYPE: 'GET',
  },
  REMOVE_KONTRAGENT: {
    ENDPOINT: (companyId, kontragentId) => `/kontragent/delete/company/${companyId}/${kontragentId}`,
    TYPE: 'DELETE',
  },
};
