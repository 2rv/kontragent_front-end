import { COMPANY_ADMIN_UNREGISTERED_LIST_DATA_NAME as DATA_NAME } from './company-admin-unregistered-list.constant';

export const convertCompanyAdminUnregisteredList = (d) => {
  return {
    [DATA_NAME.LIST]: d[DATA_NAME.LIST].map((company) => ({
      [DATA_NAME.ID]: company[DATA_NAME.ID],
      [DATA_NAME.NAME]: company[DATA_NAME.NAME],
      [DATA_NAME.INN]: company[DATA_NAME.INN],
      [DATA_NAME.VERIFICATE_INFO]: company[DATA_NAME.VERIFICATE_INFO],
      [DATA_NAME.VERIFICATE_PAYMENT]: company[DATA_NAME.VERIFICATE_PAYMENT],
      [DATA_NAME.AMOUNT]:
        (company[DATA_NAME.COMPANY_BALANCE] ?? {})[DATA_NAME.AMOUNT] ?? 0,
    })),
    [DATA_NAME.SKIP]: d[[DATA_NAME.SKIP]],
    [DATA_NAME.TAKE]: d[[DATA_NAME.TAKE]],
    [DATA_NAME.COUNT]: d[[DATA_NAME.COUNT]],
  };
};
