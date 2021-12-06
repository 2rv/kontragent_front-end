export const COMPANY_ACCOUNT_KONTRAGENTS_ROUTE_PATH = '/company/[companyId]/kontragents';

export const COMPANY_ACCOUNT_KONTRAGENTS_ROUTE_PATH_DYNAMIC = (
  { companyId } = {
    companyId: '[companyId]',
  },
) => `/company/${companyId}/kontragents`;

export const COMPANY_ACCOUNT_KONTRAGENTS_DATA_NAME = {
  ID: 'id',
  NAME: 'name',
  INN: 'inn',
  CONTRACTOR: 'contractor',
};

export const COMPANY_ACCOUNT_KONTRAGENTS_API = {
  FETCH_COMPANY_ACCOUNT_KONTRAGENTS: {
    ENDPOINT: (companyId) => `/kontragent/get/company/${companyId}/kontragents`,
    TYPE: 'GET',
  },
  CREATE_COMPANY_ACCOUNT_KONTRAGENT: {
    ENDPOINT: (companyId) => `/kontragent/company/${companyId}/create/kontragent`,
    TYPE: 'POST',
  },
};
