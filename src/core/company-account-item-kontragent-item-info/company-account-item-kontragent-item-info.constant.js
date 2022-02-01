export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_API = {
  FETCH_KONTRAGENT: {
    ENDPOINT: (companyId, kontragentId) =>
      `/kontragent/getone/company/${companyId}/${kontragentId}`,
    TYPE: 'GET',
  },
  REMOVE_KONTRAGENT: {
    ENDPOINT: (companyId, kontragentId) =>
      `/kontragent/delete/company/${companyId}/${kontragentId}`,
    TYPE: 'DELETE',
  },
};

export const COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_INFO_DATA_NAME = {
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
