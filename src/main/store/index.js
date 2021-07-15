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
  myCounterpartiesListStore,
  MY_COUNTERPARTIES_LIST_STORE_NAME,
} from '../../core/my-counterparties-list';
import {
  myLegalEntitiesListStore,
  MY_LEGAL_ENTITIES_LIST_STORE_NAME,
} from '../../core/my-legal-entities-list';
import {
  mySupportRequestsListStore,
  MY_SUPPORT_REQUESTS_LIST_STORE_NAME,
} from '../../core/my-support-requests-list';
import {
  myVerificationRequestsListStore,
  MY_VERIFICATION_REQUESTS_LIST_STORE_NAME,
} from '../../core/my-verification-requests-list';
import {
  supportCreateRequestStore,
  SUPPORT_CREATE_REQUEST_STORE_NAME,
} from '../../core/support-create-request';
import {
  bookReviewListStore,
  BOOK_REVIEW_LIST_STORE_NAME,
} from '../../core/book-review-list';
import {
  balanceDepositFormStore,
  BALANCE_DEPOSIT_STORE_NAME,
} from '../../core/balance-deposit';
import {
  arbitrationRequestsListStore,
  ARBITRATION_REQUESTS_LIST_STORE_NAME,
} from '../../core/arbitration-requests-list';
import {
  settings2FAStore,
  SETTINGS_2FA_STORE_NAME,
} from '../../core/settings-2fa';
import {
  myRequestsJuristsListStore,
  MY_REQUESTS_JURISTS_LIST_STORE_NAME,
} from '../../core/my-requests-jurists-list';
import {
  themeArbitrationStore,
  THEME_ARBITRATION_STORE_NAME,
} from '../../core/theme-arbitration';
import {
  counterpartyStore,
  COUNTERPARTY_STORE_NAME,
} from '../../core/counterparty';
import { captchaStore, CAPTCHA_STORE_NAME } from '../../lib/common/captcha';
import {
  myCompaniesAddCompanyStore,
  MY_COMPANIES_ADD_COMPANY_STORE_NAME,
} from '../../core/my-companies-add-company';

export const reducers = combineReducers({
  [AUTH_STORE_NAME]: authStore,
  [LANG_STORE_NAME]: langStore,
  [NAVIGATION_STORE_NAME]: navigationStore,
  [SIGNUP_STORE_NAME]: signupStore,
  [LOGIN_STORE_NAME]: loginStore,
  [AUTH_CHANGE_PASSWORD_STORE_NAME]: authChangePasswordStore,
  [AUTH_RECOVERY_ACCOUNT_STORE_NAME]: authRecoveryAccountStore,
  [MY_COUNTERPARTIES_LIST_STORE_NAME]: myCounterpartiesListStore,
  [MY_LEGAL_ENTITIES_LIST_STORE_NAME]: myLegalEntitiesListStore,
  [MY_SUPPORT_REQUESTS_LIST_STORE_NAME]: mySupportRequestsListStore,
  [MY_VERIFICATION_REQUESTS_LIST_STORE_NAME]: myVerificationRequestsListStore,
  [SUPPORT_CREATE_REQUEST_STORE_NAME]: supportCreateRequestStore,
  [BOOK_REVIEW_LIST_STORE_NAME]: bookReviewListStore,
  [BALANCE_DEPOSIT_STORE_NAME]: balanceDepositFormStore,
  [ARBITRATION_REQUESTS_LIST_STORE_NAME]: arbitrationRequestsListStore,
  [SETTINGS_2FA_STORE_NAME]: settings2FAStore,
  [MY_REQUESTS_JURISTS_LIST_STORE_NAME]: myRequestsJuristsListStore,
  [CAPTCHA_STORE_NAME]: captchaStore,
  [THEME_ARBITRATION_STORE_NAME]: themeArbitrationStore,
  [MY_COMPANIES_ADD_COMPANY_STORE_NAME]: myCompaniesAddCompanyStore,
  [COUNTERPARTY_STORE_NAME]: counterpartyStore,
});

export { initStore } from './store.core';
