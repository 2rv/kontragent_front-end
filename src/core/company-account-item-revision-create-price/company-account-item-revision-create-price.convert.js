import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME } from './company-account-item-revision-create-price.constant';

export const convertCompanyAccountItemRevisionCreatePriceStoreData = (
  companies,
) => {
  return companies.map((company) => ({
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.NAME]: company.name,
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.INN]: company.inn,
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION]:
      company.description,
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.YEAR]: company.year.map(
      (y) => ({
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.YEAR]: y.year,
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.FIRST_PERIOD]:
          y.period[0],
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.SECOND_PERIOD]:
          y.period[1],
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.THIRD_PERIOD]:
          y.period[2],
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.FOURTH_PERIOD]:
          y.period[3],
      }),
    ),
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.FILE_ID_LIST]:
      company.fileIdList,
  }));
};
