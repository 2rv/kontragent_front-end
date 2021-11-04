import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME } from './company-account-item-revision-create-price.constant';

export const convertCompanyAccountItemRevisionCreatePriceStoreData = (
  companies,
) => {
  return companies.map((company) => ({
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.TITLE]: company.name,
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.DESCRIPTION]:
      company.description,
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.INN]: company.inn,
    [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.YEAR]: company.year.map(
      (y) => ({
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.YEAR_NAME]: y.year,
        [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_DATA_NAME.YEAR_PERIOD]: y.period,
      }),
    ),
  }));
};
