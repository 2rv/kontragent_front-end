import { text } from '../../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../../settings/settings.constant';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../company-account-list';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../../revision-admin-list';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../user-admin-list';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from '../../user-referal-balance';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from '../../user-referal-system';
import { COMPANY_ADMIN_LIST_ROUTE_PATH } from '../../company-admin-list';

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
    [COMPANY_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.COMPANIES'),
  },
  {
    [REVISION_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.REVISION'),
  },
  {
    [USER_ADMIN_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.USERS'),
  },
  { [SETTINGS_ROUTE_PATH]: text('NAVIGATION.ADMIN.SETITNGS') },
];