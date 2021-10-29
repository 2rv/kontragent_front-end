import { getQuery } from '../../main/navigation/navigation.core';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from '../user-referal-system';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from '../user-referal-balance';

export const USER_REFERAL_NAVIGATION = [
  {
    id: 0,
    label: 'NAVIGATION.TABS.USER_REFERAL.SYSTEM',

    path: () => {
      return USER_REFERAL_SYSTEM_ROUTE_PATH;
    },
    pathname: USER_REFERAL_SYSTEM_ROUTE_PATH,
  },
  {
    id: 1,
    label: 'NAVIGATION.TABS.USER_REFERAL.BALANCE',

    path: () => {
      return USER_REFERAL_BALANCE_ROUTE_PATH;
    },
    pathname: USER_REFERAL_BALANCE_ROUTE_PATH,
  },
];
