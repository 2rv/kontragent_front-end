import { combineReducers } from 'redux';
import { AUTH_SIGNUP_STORE_NAME } from '../../core/auth-signup/auth-signup.constant';
import { authSignupStore } from '../../core/auth-signup/auth-signup.store';

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
});

export { initStore } from './store.core';
