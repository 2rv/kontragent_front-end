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
import {
  companyAdminItemInfoVerificateStore,
  COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME,
} from '../../core/company-admin-item-info-verificate';
import {
  ACCOUNT_ADD_TO_REFERAL_STORE_NAME,
  accountAddToReferalStore,
} from '../../core/account-add-to-referal';
import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';

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
  [COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME]:
    companyAdminItemInfoVerificateStore,
  [ACCOUNT_ADD_TO_REFERAL_STORE_NAME]: accountAddToReferalStore,
});

export { initStore } from './store.core';
