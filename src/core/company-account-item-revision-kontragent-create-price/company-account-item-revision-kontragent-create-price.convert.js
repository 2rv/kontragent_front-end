import { revisionPeriodPrice } from '../../lib/common/revision-period-price';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_PRICE_DATA_NAME as DATA_NAME } from './company-account-item-revision-kontragent-create-price.constant';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';

export function convertCompanyAccountItemRevisionKontragentCreatePrice(
  company,
  referal,
) {
  return {
    [DATA_NAME.COMPANY_BALANCE]: +company[DATA_NAME.COMPANY_BALANCE] || 0,
    [DATA_NAME.REFERAL_BALANCE]: +referal[DATA_NAME.REFERAL_BALANCE] || 0,
  };
}

export function getCompanyAccountItemRevisionKontragentPrice(kontragents) {
  const result = kontragents.reduce((acc, kontragent) => {
    acc += revisionPeriodPrice(kontragent[FIELD_NAME.YEARS]);
    return acc;
  }, 0);
  return result || 0;
}
