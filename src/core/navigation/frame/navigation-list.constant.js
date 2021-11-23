import { text } from '../../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../../settings/settings.constant';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../company-account-list';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../../revision-admin-list';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../user-admin-list';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from '../../user-referal-balance';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from '../../user-referal-system';
import { COMPANY_ADMIN_LIST_ROUTE_PATH } from '../../company-admin-list';
import { CREATE_ARTICLE_ROUTE_PATH } from '../../article-create';
import { ADMIN_POST_LIST_ROUTE_PATH } from '../../admin-post-list';

export const USER_MENU_ITEM = [
  { [COMPANY_ACCOUNT_LIST_ROUTE_PATH]: text('NAVIGATION.USER.MY_COMPANIES') },
  {
    [USER_REFERAL_BALANCE_ROUTE_PATH]: text('NAVIGATION.USER.BALANCE'),
  },
  {
    [USER_REFERAL_SYSTEM_ROUTE_PATH]: text('NAVIGATION.USER.SYSTEM'),
  },
  { [CREATE_ARTICLE_ROUTE_PATH]: text('NAVIGATION.USER.ARTICLE_CREATE') },
  { [ADMIN_POST_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.POSTS') },
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
  { [ADMIN_POST_LIST_ROUTE_PATH]: text('NAVIGATION.ADMIN.POSTS') },
  { [SETTINGS_ROUTE_PATH]: text('NAVIGATION.ADMIN.SETITNGS') },
];
