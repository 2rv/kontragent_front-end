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

  [COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH]: CompanyAccountItemInfoRouter,
  [COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH]: CompanyAccountItemMemberRouter,
  [COMPANY_ADMIN_ITEM_ROUTE_PATH]: CompanyAdminItemRouter,
  [USER_ADMIN_LIST_ROUTE_PATH]: UserAdminListRouter,
  [COMPANY_ADMIN_LIST_ROUTE_PATH]: CompanyAdminListRouter,
  [REVISION_ADMIN_LIST_ROUTE_PATH]: RevisionAdminListRouter,
  [AUTH_REFERAL_ROUTE_PATH]: AuthReferalRouter,
  [USER_REFERAL_SYSTEM_ROUTE_PATH]: UserReferalSystemRouter,
  [USER_REFERAL_BALANCE_ROUTE_PATH]: UserReferalBalanceRouter,
  [ACCOUNT_REFERAL_ROUTE_PATH]: AccountReferalRouter,
};

export const Router = routesInit(routes);
