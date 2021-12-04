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
import {
  CompanyAccountItemRevisionCreateRouter,
  COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH,
} from '../../core/company-account-item-revision-create';
import {
  CompanyAccountItemRevisionItemRouter,
  COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH,
} from '../../core/company-account-item-revision-item';
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
  CompanyAccountItemRevisionListRouter,
  COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH,
} from '../../core/company-account-item-revision-list';
import {
  CompanyAdminItemRouter,
  COMPANY_ADMIN_ITEM_ROUTE_PATH,
} from '../../core/company-admin-item';
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
  RevisionAdminListRouter,
  REVISION_ADMIN_LIST_ROUTE_PATH,
} from '../../core/revision-admin-list';
import {
  UserAdminListRouter,
  USER_ADMIN_LIST_ROUTE_PATH,
} from '../../core/user-admin-list';
import {
  AccountReferalRouter,
  ACCOUNT_REFERAL_ROUTE_PATH,
} from '../../core/account-referal';
import {
  AdminRevisionReviewRouter,
  ADMIN_REVISION_REVIEW_ROUTE_PATH,
} from '../../core/admin-revision-review';
import {
  AdminRevisionReviewItemRouter,
  ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH,
} from '../../core/admin-revision-review-item';
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
  COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ROUTE_PATH,
  CompanyAccountItemSelfRevisionCreateRouter,
} from '../../core/company-account-item-self-revision-create';
import {
  CompanyAccountItemCreateBillRouter,
  COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH,
} from '../../core/company-account-item-create-bill';

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
  [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_ROUTE_PATH]:
    CompanyAccountItemRevisionCreateRouter,
  [COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH]:
    CompanyAccountItemRevisionItemRouter,
  [COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH]:
    CompanyAccountItemRevisionListRouter,
  [COMPANY_ACCOUNT_ITEM_BALANCE_ROUTE_PATH]: CompanyAccountItemBalanceRouter,
  [USER_ADMIN_ITEM_INFO_ROUTE_PATH]: UserAdminItemInfoRouter,
  [USER_ADMIN_ITEM_COMPANY_LIST_ROUTE_PATH]: UserAdminItemCompanyListRouter,
  [COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH]: CompanyAccountItemInfoRouter,
  [COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH]: CompanyAccountItemMemberRouter,
  [COMPANY_ADMIN_ITEM_ROUTE_PATH]: CompanyAdminItemRouter,
  [USER_ADMIN_LIST_ROUTE_PATH]: UserAdminListRouter,
  [ADMIN_REVISION_REVIEW_ROUTE_PATH]: AdminRevisionReviewRouter,
  [ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH]: AdminRevisionReviewItemRouter,
  [ADMIN_POST_LIST_ROUTE_PATH]: AdminPostListRouter,

  [COMPANY_ADMIN_LIST_ROUTE_PATH]: CompanyAdminListRouter,
  [REVISION_ADMIN_LIST_ROUTE_PATH]: RevisionAdminListRouter,
  [AUTH_REFERAL_ROUTE_PATH]: AuthReferalRouter,
  [USER_REFERAL_SYSTEM_ROUTE_PATH]: UserReferalSystemRouter,
  [USER_REFERAL_BALANCE_ROUTE_PATH]: UserReferalBalanceRouter,
  [ACCOUNT_REFERAL_ROUTE_PATH]: AccountReferalRouter,
  [COMPANY_ACCOUNT_ITEM_CREATE_BILL_ROUTE_PATH]:
    CompanyAccountItemCreateBillRouter,
  [USER_ADMIN_INVITE_ROUTE_PATH]: UserAdminInviteRouter,
  [CREATE_ARTICLE_ROUTE_PATH]: createArticleRouter,
  [EDIT_ARTICLE_ROUTE_PATH]: editArticleRouter,
  [ARTICLE_ROUTE_PATH]: articleRouter,
  [INVITE_ROUTE_PATH]: InviteRouter,
  [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ROUTE_PATH]:
    CompanyAccountItemSelfRevisionCreateRouter,
};

export const Router = routesInit(routes);
