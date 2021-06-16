import { combineReducers } from 'redux';

import { authStore, AUTH_STORE_NAME } from '../../lib/common/auth';
import { langStore, LANG_STORE_NAME } from '../../lib/common/lang';
import { signupStore, SIGNUP_STORE_NAME } from '../../core/signup';
import { loginStore, LOGIN_STORE_NAME } from '../../core/login';
import {
  navigationStore,
  NAVIGATION_STORE_NAME,
} from '../../lib/common/navigation';
import {
  authChangePasswordStore,
  AUTH_CHANGE_PASSWORD_STORE_NAME,
} from '../../core/auth-change-password';
import {
  authRecoveryAccountStore,
  AUTH_RECOVERY_ACCOUNT_STORE_NAME,
} from '../../core/auth-recovery-account';
import {
  authVerificationEmailConfirmStore,
  AUTH_VERIFICATION_EMAIL_CONFIRM_STORE_NAME,
} from '../../core/auth-verification-email-confirm';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [AUTH_CHANGE_PASSWORD_STORE_NAME]: authChangePasswordStore,
  [AUTH_RECOVERY_ACCOUNT_STORE_NAME]: authRecoveryAccountStore,
  [AUTH_VERIFICATION_EMAIL_CONFIRM_STORE_NAME]:
    authVerificationEmailConfirmStore,
});

export { initStore } from './store.core';
