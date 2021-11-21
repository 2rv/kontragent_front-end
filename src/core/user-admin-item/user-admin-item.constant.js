import {
  USER_ADMIN_ITEM_INFO_ROUTE_PATH,
  USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC,
} from '../user-admin-item-info/user-admin-item-info.constant';
import { getQuery } from '../../main/navigation/navigation.core';
import {
  USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH,
  USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH_DYNAMIC,
} from '../user-admin-item-company-list/user-admin-item-company-list.constant';

export const USER_ADMIN_ITEM_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.USER_ADMIN_ITEM.INFO',

    path: () => {
      return USER_ADMIN_ITEM_INFO_ROUTE_PATH_DYNAMIC({
        userId: getQuery('userId'),
      });
    },
    pathname: USER_ADMIN_ITEM_INFO_ROUTE_PATH,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.USER_ADMIN_ITEM.COMPANY_USER',
    path: () => {
      return USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH_DYNAMIC({
        userId: getQuery('userId'),
      });
    },
    pathname: USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH,
  },
];
