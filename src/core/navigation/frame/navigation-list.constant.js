import { text } from '../../../lib/common/text';

import { SETTINGS_ROUTE_PATH } from '../../settings/settings.constant';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../company-account-list';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../../revision-admin-list';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../user-admin-list';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from '../../user-referal-balance';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from '../../user-referal-system';
import { COMPANY_ADMIN_LIST_ROUTE_PATH } from '../../company-admin-list';
import { USER_ADMIN_INVITE_ROUTE_PATH } from '../../user-admin-invite';
import { CREATE_ARTICLE_ROUTE_PATH } from '../../article-create';
import { ADMIN_POST_LIST_ROUTE_PATH } from '../../admin-post-list';
import { BILL_ADMIN_LIST_ROUTE_PATH } from '../../bill-admin-list';
import { NOTIFICATION_EMAIL_CREATE_ROUTE_PATH } from '../../notification-admin-email-create';
import { FEEDBACK_ADMIN_LIST_ROUTE_PATH } from '../../feedback-admin-list';
import { FEEDBACK_ACCOUNT_CREATE_ROUTE_PATH } from '../../feedback-account-create';

export const USER_MENU_ITEM = [
  {
    path: USER_REFERAL_BALANCE_ROUTE_PATH,
    name: text('NAVIGATION.USER.BALANCE'),
  },
  {
    path: COMPANY_ACCOUNT_LIST_ROUTE_PATH,
    name: text('NAVIGATION.USER.MY_COMPANIES'),
  },
  {
    path: USER_REFERAL_SYSTEM_ROUTE_PATH,
    name: text('NAVIGATION.USER.SYSTEM'),
  },
  {
    path: FEEDBACK_ACCOUNT_CREATE_ROUTE_PATH,
    name: text('NAVIGATION.USER.FEEDBACK_CREATE'),
  },
  {
    path: CREATE_ARTICLE_ROUTE_PATH,
    name: text('NAVIGATION.USER.ARTICLE_CREATE'),
  },
  { path: ADMIN_POST_LIST_ROUTE_PATH, name: text('NAVIGATION.ADMIN.POSTS') },
  { path: SETTINGS_ROUTE_PATH, name: text('NAVIGATION.USER.SETITNGS') },
];

export const ADMIN_MENU_ITEM = [
  {
    path: COMPANY_ADMIN_LIST_ROUTE_PATH,
    name: text('NAVIGATION.ADMIN.COMPANIES'),
  },
  {
    path: REVISION_ADMIN_LIST_ROUTE_PATH,
    name: text('NAVIGATION.ADMIN.REVISION'),
  },
  {
    path: FEEDBACK_ADMIN_LIST_ROUTE_PATH,
    name: text('NAVIGATION.ADMIN.FEEDBACK'),
  },
  {
    path: USER_ADMIN_LIST_ROUTE_PATH,
    name: text('NAVIGATION.ADMIN.USERS'),
  },
  {
    path: USER_ADMIN_INVITE_ROUTE_PATH,
    name: text('NAVIGATION.ADMIN.INVITE'),
  },
  {
    path: CREATE_ARTICLE_ROUTE_PATH,
    name: text('NAVIGATION.USER.ARTICLE_CREATE'),
  },
  { path: ADMIN_POST_LIST_ROUTE_PATH, name: text('NAVIGATION.ADMIN.POSTS') },
  { path: BILL_ADMIN_LIST_ROUTE_PATH, name: text('NAVIGATION.ADMIN.BILLS') },
  {
    path: NOTIFICATION_EMAIL_CREATE_ROUTE_PATH,
    name: text('NAVIGATION.ADMIN.NOTIFICATION'),
  },
  { path: SETTINGS_ROUTE_PATH, name: text('NAVIGATION.ADMIN.SETITNGS') },
];
