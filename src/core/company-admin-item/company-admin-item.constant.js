import { getQuery } from '../../main/navigation/navigation.core';

import {
  COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH,
  COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC,
} from '../company-admin-item-info';
import {
  COMPANY_ADMIN_BILL_LIST_ROUTE_PATH,
  COMPANY_ADMIN_BILL_LIST_ROUTE_PATH_DYNAMIC,
} from '../company-admin-bill-list';
import {
  COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH,
  COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH_DYNAMIC,
} from '../company-admin-item-member-list';
import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC } from '../company-admin-item-revision-list';
import { COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH } from '../company-admin-item-revision-list/company-admin-item-revision-list.constant';

export const COMPANY_ADMIN_ITEM_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.REVISION',
    path: () => {
      return COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.INFO',
    path: () => {
      return COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH,
  },
  {
    id: 2,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.BILL_LIST',
    path: () => {
      return COMPANY_ADMIN_BILL_LIST_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ADMIN_BILL_LIST_ROUTE_PATH,
  },
  {
    id: 3,
    label: 'NAVIGATION.TABS.COMPANY_ADMIN_ITEM.MEMBERS',
    path: () => {
      return COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH_DYNAMIC({
        companyId: getQuery('companyId'),
      });
    },
    pathname: COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH,
  },
];
