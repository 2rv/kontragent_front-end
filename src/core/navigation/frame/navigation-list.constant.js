import { text } from '../../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../../settings';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../company-account-list';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../../revision-admin-list';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../user-admin-list';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from '../../user-referal-balance';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from '../../user-referal-system';

export const USER_MENU_ITEM = [
  { [COMPANY_ACCOUNT_LIST_ROUTE_PATH]: text('NAVIGATION.USER.MY_COMPANIES') },
  {
    [USER_REFERAL_BALANCE_ROUTE_PATH]: text('NAVIGATION.USER.BALANCE'),
  },
  {
    [USER_REFERAL_SYSTEM_ROUTE_PATH]: text('NAVIGATION.USER.SYSTEM'),
  },
  { [SETTINGS_ROUTE_PATH]: text('NAVIGATION.USER.SETITNGS') },
];

export const ADMIN_MENU_ITEM = [
  {
    [COMPANY_ACCOUNT_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.MY_COMPANIES'),
  },
  {
    [REVISION_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.REVISION'),
  },
  {
    [USER_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.MEMBERS'),
  },
  { [SETTINGS_ROUTE_PATH]: text('NAVIGATION.ADMIN.SETITNGS') },
];
