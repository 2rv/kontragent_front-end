import { revisionPeriodPrice } from '../../lib/common/revision-period-price';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_PRICE_DATA_NAME as DATA_NAME } from './company-account-item-revision-self-create-price.constant';

export function convertCompanyAccountItemRevisionSelfCreatePrice(
  company,
  referal,
) {
  return {
    [DATA_NAME.COMPANY_BALANCE]: +company[DATA_NAME.COMPANY_BALANCE] || 0,
    [DATA_NAME.REFERAL_BALANCE]: +referal[DATA_NAME.REFERAL_BALANCE] || 0,
  };
}

export function getCompanyAccountItemRevisionSelfCreatePrice(years) {
  const result = revisionPeriodPrice(years);
  return result || 0;
}
