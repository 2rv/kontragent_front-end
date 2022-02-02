import { routesInit } from './router.core';

import { IndexRouter } from '../../core/index/index.router';
import { SettingsRouter, SETTINGS_ROUTE_PATH } from '../../core/settings';
import {
  CompanyAccountListRouter,
  COMPANY_ACCOUNT_LIST_ROUTE_PATH,
} from '../../core/company-account-list';
import {
  CompanyAccountCreateRouter,
  COMPANY_ACCOUNT_CREATE_ROUTE_PATH,
} from '../../core/company-account-create';
import { AuthLoginRouter, AUTH_LOGIN_ROUTE_PATH } from '../../core/auth-login';
import {
  AuthSignupRouter,
  AUTH_SIGNUP_ROUTE_PATH,
} from '../../core/auth-signup';
import {
  AuthRecoveryAccountRouter,
  AUTH_RECOVERY_ACCOUNT_ROUTE_PATH,
} from '../../core/auth-recovery-account';
import {
  AuthRecoveryAccountUpdatePasswordRouter,
  AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ROUTE_PATH,
} from '../../core/auth-recovery-account-update-password';
import {
  AuthVerificationEmailRouter,
  AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
} from '../../core/auth-verification-email';
import {
  AuthVerificationPhoneRouter,
  AUTH_VERIFICATION_PHONE_ROUTE_PATH,
} from '../../core/auth-verification-phone';
import {
  CompanyAdminListRouter,
  COMPANY_ADMIN_LIST_ROUTE_PATH,
} from '../../core/company-admin-list';
import {
  AuthReferalRouter,
  AUTH_REFERAL_ROUTE_PATH,
} from '../../core/auth-referal';
import {
  CompanyAccountItemBalanceRouter,
  COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH,
} from '../../core/company-account-item-balance';
import {
  CompanyAccountItemInfoRouter,
  COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH,
} from '../../core/company-account-item-info';
import {
  COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH,
  CompanyAccountItemMemberRouter,
} from '../../core/company-account-item-member';
import {
  UserReferalSystemRouter,
  USER_REFERAL_SYSTEM_ROUTE_PATH,
} from '../../core/user-referal-system';
import {
  UserReferalBalanceRouter,
  USER_REFERAL_BALANCE_ROUTE_PATH,
} from '../../core/user-referal-balance';
import {
  UserAdminListRouter,
  USER_ADMIN_LIST_ROUTE_PATH,
} from '../../core/user-admin-list';
import {
  AccountReferalRouter,
  ACCOUNT_REFERAL_ROUTE_PATH,
} from '../../core/account-referal';
import {
  UserAdminInviteRouter,
  USER_ADMIN_INVITE_ROUTE_PATH,
} from '../../core/user-admin-invite';
import {
  USER_ADMIN_ITEM_INFO_ROUTE_PATH,
  UserAdminItemInfoRouter,
} from '../../core/user-admin-item-info';
import {
  UserAdminItemCompanyListRouter,
  USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH,
} from '../../core/user-admin-item-company-list';
import {
  createArticleRouter,
  CREATE_ARTICLE_ROUTE_PATH,
} from '../../core/article-create';
import {
  editArticleRouter,
  EDIT_ARTICLE_ROUTE_PATH,
} from '../../core/article-edit';
import { articleRouter, ARTICLE_ROUTE_PATH } from '../../core/article-view';
import {
  ADMIN_POST_LIST_ROUTE_PATH,
  AdminPostListRouter,
} from '../../core/admin-post-list';
import { INVITE_ROUTE_PATH, InviteRouter } from '../../core/invite';
import {
  BillAdminListRouter,
  BILL_ADMIN_LIST_ROUTE_PATH,
} from '../../core/bill-admin-list';
import {
  COMPANY_BILL_LIST_ROUTE_PATH,
  CompanyBillListRouter,
} from '../../core/company-bill-list';
import {
  COMPANY_ACCOUNT_BILL_ITEM_ROUTE_PATH,
  CompanyAccountBillItemRouter,
} from '../../core/company-account-bill-item';
import {
  ADMIN_BILL_REVISION_ROUTE_PATH,
  AdminBillRevisionRouter,
} from '../../core/admin-bill-revision';
import {
  COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH,
  CompanyAdminItemRevisionListRouter,
} from '../../core/company-admin-item-revision-list';
import {
  COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH,
  CompanyAdminItemInfoRouter,
} from '../../core/company-admin-item-info';
import {
  COMPANY_ADMIN_BILL_LIST_ROUTE_PATH,
  CompanyAdminItemBillListRouter,
} from '../../core/company-admin-bill-list';
import {
  COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH,
  CompanyAdminItemMemberListRouter,
} from '../../core/company-admin-item-member-list';
import { HOME_ROUTE_PATH, LandingRouter } from '../../core/landing';
import {
  NOTIFICATION_EMAIL_CREATE_ROUTE_PATH,
  NotificationAdminEmailCreateRouter,
} from '../../core/notification-admin-email-create';
import {
  FEEDBACK_ADMIN_LIST_ROUTE_PATH,
  FeedbackAdminListRouter,
} from '../../core/feedback-admin-list';
import {
  FEEDBACK_ADMIN_ITEM_ROUTE_PATH,
  FeedbackAdminItemRouter,
} from '../../core/feedback-admin-item';
import {
  FEEDBACK_ACCOUNT_CREATE_ROUTE_PATH,
  FeedbackAccountCreatePageRouter,
} from '../../core/feedback-account-create';
import {
  COMPANY_ADMIN_IMPORT_ROUTE_PATH,
  CompanyAdminImportRouter,
} from '../../core/company-admin-import';
import {
  AdminDashboardRouter,
  ADMIN_DASHBOARD_ROUTE_PATH,
} from '../../core/admin-dashboard';

import {
  COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH,
  CompanyAccountItemKontragentRouter,
} from '../../core/company-account-item-kontragent';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH } from '../../core/company-account-item-kontragent-item/company-account-item-kontragent-item.constant';
import { CompanyAccountItemKontragentItemRouter } from '../../core/company-account-item-kontragent-item/company-account-item-kontragent-item.router';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH } from '../../core/company-account-item-revision-kontragent/company-account-item-revision-kontragent.constant';
import { CompanyAccountItemRevisionKontragentRouter } from '../../core/company-account-item-revision-kontragent/company-account-item-revision-kontragent.router';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_KONTRAGENT_ROUTE_PATH } from '../../core/company-account-item-revision-kontragent-item/company-account-item-revision-kontragent-item.constant';
import { CompanyAccountItemRevisionKontragentItemRouter } from '../../core/company-account-item-revision-kontragent-item/company-account-item-revision-kontragent-item.router';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH } from '../../core/company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.constant';
import { CompanyAccountItemRevisionKontragentCreateRouter } from '../../core/company-account-item-revision-kontragent-create/company-account-item-revision-kontragent-create.router';

import { ADMIN_REVISION_KONTRAGENT_LIST_ROUTE_PATH } from '../../core/admin-revision-kontragent-list/admin-revision-kontragent-list.constant';
import { AdminRevisionKontragentListRouter } from '../../core/admin-revision-kontragent-list/admin-revision-kontragent-list.router';

import { ADMIN_REVISION_KONTRAGENT_ITEM_ROUTE_PATH } from '../../core/admin-revision-kontragent-item/admin-revision-kontragent-item.constant';
import { AdminRevisionKontragentItemRouter } from '../../core/admin-revision-kontragent-item/admin-revision-kontragent-item.router';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_ROUTE_PATH } from '../../core/company-account-item-revision-self/company-account-item-revision-self.constant';
import { CompanyAccountItemRevisionSelfRouter } from '../../core/company-account-item-revision-self/company-account-item-revision-self.router';

import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_ROUTE_PATH } from '../../core/company-account-item-revision-self-item/company-account-item-revision-self-item.constant';
import { CompanyAccountItemRevisionSelfItemRouter } from '../../core/company-account-item-revision-self-item/company-account-item-revision-self-item.router';

import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH } from '../../core/company-account-item-revision-self-create/company-account-item-revision-self-create.constant';
import { CompanyAccountItemRevisionSelfCreateRouter } from '../../core/company-account-item-revision-self-create/company-account-item-revision-self-create.router';

import { ADMIN_REVISION_SELF_LIST_ROUTE_PATH } from '../../core/admin-revision-self-list/admin-revision-self-list.constant';
import { AdminRevisionSelfListRouter } from '../../core/admin-revision-self-list/admin-revision-self-list.router';

import { ADMIN_REVISION_SELF_ITEM_ROUTE_PATH } from '../../core/admin-revision-self-item/admin-revision-self-item.constant';
import { AdminRevisionSelfItemRouter } from '../../core/admin-revision-self-item/admin-revision-self-item.router';

import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH } from '../../core/company-account-item-kontragent-item-revision-list/company-account-item-kontragent-item-revision-list.constant';
import { CompanyAccountItemKontragentItemRevisionListRouter } from '../../core/company-account-item-kontragent-item-revision-list/company-account-item-kontragent-item-revision-list.router';

export const routes = {
  '/': IndexRouter,
  [AUTH_LOGIN_ROUTE_PATH]: AuthLoginRouter,
  [AUTH_SIGNUP_ROUTE_PATH]: AuthSignupRouter,
  [AUTH_VERIFICATION_EMAIL_ROUTE_PATH]: AuthVerificationEmailRouter,
  [AUTH_VERIFICATION_PHONE_ROUTE_PATH]: AuthVerificationPhoneRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: AuthRecoveryAccountRouter,
  [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_ROUTE_PATH]:
    AuthRecoveryAccountUpdatePasswordRouter,
  [SETTINGS_ROUTE_PATH]: SettingsRouter,
  [COMPANY_ACCOUNT_LIST_ROUTE_PATH]: CompanyAccountListRouter,
  [COMPANY_ACCOUNT_CREATE_ROUTE_PATH]: CompanyAccountCreateRouter,
  [COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH]: CompanyAccountItemBalanceRouter,
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH]:
    CompanyAccountItemKontragentRouter,
  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH]:
    CompanyAccountItemKontragentItemRouter,
  [COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH]: CompanyAccountItemInfoRouter,
  [COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH]: CompanyAccountItemMemberRouter,
  [USER_ADMIN_ITEM_INFO_ROUTE_PATH]: UserAdminItemInfoRouter,
  [USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH]: UserAdminItemCompanyListRouter,
  [USER_ADMIN_LIST_ROUTE_PATH]: UserAdminListRouter,
  [ADMIN_POST_LIST_ROUTE_PATH]: AdminPostListRouter,
  [COMPANY_ACCOUNT_BILL_ITEM_ROUTE_PATH]: CompanyAccountBillItemRouter,
  [COMPANY_ADMIN_LIST_ROUTE_PATH]: CompanyAdminListRouter,
  [AUTH_REFERAL_ROUTE_PATH]: AuthReferalRouter,
  [USER_REFERAL_SYSTEM_ROUTE_PATH]: UserReferalSystemRouter,
  [USER_REFERAL_BALANCE_ROUTE_PATH]: UserReferalBalanceRouter,
  [ACCOUNT_REFERAL_ROUTE_PATH]: AccountReferalRouter,
  [COMPANY_BILL_LIST_ROUTE_PATH]: CompanyBillListRouter,
  [USER_ADMIN_INVITE_ROUTE_PATH]: UserAdminInviteRouter,
  [CREATE_ARTICLE_ROUTE_PATH]: createArticleRouter,
  [EDIT_ARTICLE_ROUTE_PATH]: editArticleRouter,
  [ARTICLE_ROUTE_PATH]: articleRouter,
  [INVITE_ROUTE_PATH]: InviteRouter,
  [BILL_ADMIN_LIST_ROUTE_PATH]: BillAdminListRouter,
  [ADMIN_BILL_REVISION_ROUTE_PATH]: AdminBillRevisionRouter,
  [COMPANY_ADMIN_ITEM_REVISION_LIST_ROUTE_PATH]:
    CompanyAdminItemRevisionListRouter,
  [COMPANY_ADMIN_ITEM_INFO_ROUTE_PATH]: CompanyAdminItemInfoRouter,
  [COMPANY_ADMIN_BILL_LIST_ROUTE_PATH]: CompanyAdminItemBillListRouter,
  [COMPANY_ADMIN_ITEM_MEMBER_LIST_ROUTE_PATH]: CompanyAdminItemMemberListRouter,
  [HOME_ROUTE_PATH]: LandingRouter,
  [NOTIFICATION_EMAIL_CREATE_ROUTE_PATH]: NotificationAdminEmailCreateRouter,
  [FEEDBACK_ADMIN_LIST_ROUTE_PATH]: FeedbackAdminListRouter,
  [FEEDBACK_ADMIN_ITEM_ROUTE_PATH]: FeedbackAdminItemRouter,
  [FEEDBACK_ACCOUNT_CREATE_ROUTE_PATH]: FeedbackAccountCreatePageRouter,
  [COMPANY_ADMIN_IMPORT_ROUTE_PATH]: CompanyAdminImportRouter,
  [ADMIN_DASHBOARD_ROUTE_PATH]: AdminDashboardRouter,

  [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH]:
    CompanyAccountItemRevisionKontragentRouter,
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_KONTRAGENT_ROUTE_PATH]:
    CompanyAccountItemRevisionKontragentItemRouter,
  [COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_ROUTE_PATH]:
    CompanyAccountItemRevisionKontragentCreateRouter,
  [ADMIN_REVISION_KONTRAGENT_LIST_ROUTE_PATH]:
    AdminRevisionKontragentListRouter,
  [ADMIN_REVISION_KONTRAGENT_ITEM_ROUTE_PATH]:
    AdminRevisionKontragentItemRouter,

  [COMPANY_ACCOUNT_ITEM_REVISION_SELF_ROUTE_PATH]:
    CompanyAccountItemRevisionSelfRouter,
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_SELF_ROUTE_PATH]:
    CompanyAccountItemRevisionSelfItemRouter,
  [COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH]:
    CompanyAccountItemRevisionSelfCreateRouter,
  [ADMIN_REVISION_SELF_LIST_ROUTE_PATH]: AdminRevisionSelfListRouter,
  [ADMIN_REVISION_SELF_ITEM_ROUTE_PATH]: AdminRevisionSelfItemRouter,

  [COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_REVISION_LIST_ROUTE_PATH]:
    CompanyAccountItemKontragentItemRevisionListRouter,
};

export const Router = routesInit(routes);
