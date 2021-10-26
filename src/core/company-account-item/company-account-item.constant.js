import { getQuery } from '../../main/navigation/navigation.core';
import {
  COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC,
  COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH,
} from '../company-account-item-balance';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../company-account-list';

export const COMPANY_ACCOUNT_ITEM_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.BALANCE',
    path: () => {
      COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.BALANCE',
    path: () => {
      COMPANY_ACCOUNT_LIST_ROUTE_PATH;
    },
    pathname: COMPANY_ACCOUNT_LIST_ROUTE_PATH,
  },
];
