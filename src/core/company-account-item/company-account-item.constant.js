import { getQuery } from '../../main/navigation/navigation.core';
import {
  COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC,
  COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH,
} from '../company-account-item-balance';
import {
  COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH,
  COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH_DYNAMIC,
} from '../company-account-item-info';
import {
  COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH,
  COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH_DYNAMIC,
} from '../company-account-item-member';
import {
  COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH,
  COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC,
} from '../company-account-item-revision-list';
import {
  COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH,
  COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH_DYNAMIC,
} from '../company-account-item-create-bill';

export const COMPANY_ACCOUNT_ITEM_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.BALANCE',

    path: () => {
      return COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.INFO',
    path: () => {
      return COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH,
  },
  {
    id: 2,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.MEMBERS',
    path: () => {
      return COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH,
  },
  {
    id: 3,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.REVISION',
    path: () => {
      return COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH,
  },
  {
    id: 4,
    label: 'NAVIGATION.TABS.COMPANY_ACCOUNT_ITEM.CREATE_BILLS',
    path: () => {
      return COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH,
  },
];
