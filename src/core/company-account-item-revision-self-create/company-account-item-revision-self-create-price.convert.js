import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME } from './company-account-item-revision-self-create.constant';

export const convertCompanyAccountItemSelfRevisionCreatePriceStoreData = (
  companies,
) => ({
  [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.DESCRIPTION]:
    companies[0].description,
  [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR]:
    companies[0].year.map((y) => ({
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.YEAR]: y.year,
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FIRST_PERIOD]:
        y.period[0],
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.SECOND_PERIOD]:
        y.period[1],
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.THIRD_PERIOD]:
        y.period[2],
      [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FOURTH_PERIOD]:
        y.period[3],
    })),
  [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME.FILE_ID_LIST]:
    companies[0].fileIdList,
});
