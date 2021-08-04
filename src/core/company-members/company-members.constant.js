export const COMPANY_MEMBERS_ROUTE_PATH = '/company-members';
export const DYNAMIC_QUERY = 'companyId';

export const COMPANY_MEMBERS_STORE_NAME = 'COMPANY_MEMBERS_STORE';

export const COMPANY_MEMBERS_API = {
  COMPANY_MEMBERS_LOAD_DATA: {
    ENDPOINT: (companyId) => `/company-user/company/${companyId}/user/list`,
    TYPE: 'GET',
  },
  COMPANY_INFO_LOAD_DATA: {
    ENDPOINT: (companyId) => `/company/get/${companyId}`,
    TYPE: 'GET',
  },
  DELETE_USER_COMPANY: {
    ENDPOINT: (companyId, userId) =>
      `company-user/company/${companyId}/user/${userId}`,
    TYPE: 'DELETE',
  },
  COMPANY_ADD_USER: {
    ENDPOINT: (companyId) => `company-user/${companyId}/user`,
    TYPE: 'POST',
  },
};

export const REDIRECT_ON_MAIN_PAGE = '/';
