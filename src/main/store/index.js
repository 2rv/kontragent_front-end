import { combineReducers } from 'redux';
import { AUTH_SIGNUP_STORE_NAME } from '../../core/auth-signup/auth-signup.constant';
import { authSignupStore } from '../../core/auth-signup/auth-signup.store';
import { AUTH_LOGIN_STORE_NAME } from '../../core/auth-login/auth-login.constant';
import { authLoginStore } from '../../core/auth-login/auth-login.store';
import { AUTH_RECOVERY_ACCOUNT_STORE_NAME } from '../../core/auth-recovery-account/auth-recovery-account.constant';
import { authRecoveryAccountStore } from '../../core/auth-recovery-account/auth-recovery-account.store';
import { AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_STORE_NAME } from '../../core/auth-recovery-account-update-password/auth-recovery-account-update-password.constant';
import { authRecoveryAccountUpdatePasswordStore } from '../../core/auth-recovery-account-update-password/auth-recovery-account-update-password.store';
import { AUTH_VERIFICATION_EMAIL_STORE_NAME } from '../../core/auth-verification-email/auth-verification-email.constant';
import { authVerificationEmailStore } from '../../core/auth-verification-email/auth-verification-email.store';
import { AUTH_VERIFICATION_PHONE_STORE_NAME } from '../../core/auth-verification-phone/auth-verification-phone.constant';
import { authVerificationPhoneStore } from '../../core/auth-verification-phone/auth-verification-phone.store';
import { companyAccountItemMemberDeleteStore } from '../../core/company-account-item-member-delete/company-account-item-member-delete.store';
import { COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME } from '../../core/company-account-item-member-delete/company-account-item-member-delete.constant';
import { companyAccountItemMemberAddStore } from '../../core/company-account-item-member-add/company-account-item-member-add.store';
import { COMPANY_ACCOUNT_ITEM_MEMBER_ADD_STORE_NAME } from '../../core/company-account-item-member-add/company-account-item-member-add.constant';
import {
  companyAdminItemInfoVerificateStore,
  COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME,
} from '../../core/company-admin-item-info-verificate';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import {
  COMPANY_ACCOUNT_ITEM_REVISION_CREATE_STORE_NAME,
  companyAccountItemRevisionCreateStore,
} from '../../core/company-account-item-revision-create';
import {
  ACCOUNT_REFERAL_STORE_NAME,
  accountReferalStore,
} from '../../core/account-referal';
import { USER_ADMIN_ROLE_STORE_NAME } from '../../core/user-admin-role/user-admin-role.constant';
import { userAdminRoleStore } from '../../core/user-admin-role/user-admin-role.store';
import {
  userAdminItemInfoStore,
  USER_ADMIN_ITEM_INFO_STORE_NAME,
} from '../../core/user-admin-item-info';
import { adminRevisionInfoStore } from '../../core/admin-revision-info/admin-revision-info.store';
import { ADMIN_REVISION_INFO_STORE_NAME } from '../../core/admin-revision-info/admin-revision-info.constant';
import {
  adminRevisionReviewStore,
  ADMIN_REVISION_REVIEW_STORE_NAME,
} from '../../core/admin-revision-review';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [AUTH_SIGNUP_STORE_NAME]: authSignupStore,
  [AUTH_LOGIN_STORE_NAME]: authLoginStore,
  [AUTH_RECOVERY_ACCOUNT_STORE_NAME]: authRecoveryAccountStore,
  [AUTH_RECOVERY_ACCOUNT_UPDATE_PASSWORD_STORE_NAME]:
    authRecoveryAccountUpdatePasswordStore,
  [AUTH_VERIFICATION_EMAIL_STORE_NAME]: authVerificationEmailStore,
  [AUTH_VERIFICATION_PHONE_STORE_NAME]: authVerificationPhoneStore,
  [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_STORE_NAME]:
    companyAccountItemRevisionCreateStore,
  [COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME]:
    companyAdminItemInfoVerificateStore,
  [COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME]:
    companyAccountItemMemberDeleteStore,
  [COMPANY_ACCOUNT_ITEM_MEMBER_ADD_STORE_NAME]:
    companyAccountItemMemberAddStore,
  [ACCOUNT_REFERAL_STORE_NAME]: accountReferalStore,
  [USER_ADMIN_ROLE_STORE_NAME]: userAdminRoleStore,
  [USER_ADMIN_ITEM_INFO_STORE_NAME]: userAdminItemInfoStore,
  [ADMIN_REVISION_INFO_STORE_NAME]: adminRevisionInfoStore,
  [ADMIN_REVISION_REVIEW_STORE_NAME]: adminRevisionReviewStore,
});

export { initStore } from './store.core';
