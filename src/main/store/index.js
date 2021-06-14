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
  authRecoveryAccountStore,
  AUTH_RECOVERY_ACCOUNT_STORE_NAME,
} from '../../core/auth-recovery-account';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [AUTH_RECOVERY_ACCOUNT_STORE_NAME]: authRecoveryAccountStore,
});

export { initStore } from './store.core';
