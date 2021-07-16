import { routesInit } from './router.core';
import { AuthChangePasswordRouter } from '../../core/auth-change-password';
import { AuthRecoveryAccountRouter } from '../../core/auth-recovery-account';
import { LoginRouter } from '../../core/login';
import { SignupRouter } from '../../core/signup';
import { dialogPersonalRouter } from '../../core/dialog-personal';
import { myCounterpartiesListRouter } from '../../core/my-counterparties-list';
import { myLegalEntitiesListRouter } from '../../core/my-legal-entities-list';
import { mySupportRequestsListRouter } from '../../core/my-support-requests-list';
import { myVerificationRequestsListRouter } from '../../core/my-verification-requests-list';
import { SupportCreateRequestRouter } from '../../core/support-create-request';
import { bookReviewListRouter } from '../../core/book-review-list';
import { balanceDepositRouter } from '../../core/balance-deposit';
import { arbitrationRequestsListRouter } from '../../core/arbitration-requests-list';
import { settingsRouter } from '../../core/settings';
import { MyRequestsJuristsListRouter } from '../../core/my-requests-jurists-list';
import { themeArbitrationRouter } from '../../core/theme-arbitration';
import { dashboardRouter } from '../../core/dashboard';
import { lawyerRequestRouter } from '../../core/lawyer-request';
import { counterpartyRouter } from '../../core/counterparty';
import { companyMembersRouter } from '../../core/company-members';
import { referralRouter } from '../../core/referral';
import { newsArticleRouter } from '../../core/news-article';
import { entityRouter } from '../../core/entity';
import { balanceActivityRouter } from '../../core/balance-activity';
import { dashboardAdminRouter } from '../../core/dashboard-admin';

import { LOGIN_ROUTE_PATH } from '../../core/login';
import { SIGNUP_ROUTE_PATH } from '../../core/signup';
import { AUTH_RECOVERY_ACCOUNT_ROUTE_PATH } from '../../core/auth-recovery-account';
import { AUTH_CHANGE_PASSWORD_ROUTE_PATH } from '../../core/auth-change-password';
import { DIALOG_PERSONAL_ROUTE_PATH } from '../../core/dialog-personal';
import { MY_COUNTERPARTIES_LIST_ROUTE_PATH } from '../../core/my-counterparties-list';
import { MY_LEGAL_ENTITIES_LIST_ROUTE_PATH } from '../../core/my-legal-entities-list';
import { MY_SUPPORT_REQUESTS_LIST_ROUTE_PATH } from '../../core/my-support-requests-list';
import { MY_VERIFICATION_REQUESTS_LIST_ROUTE_PATH } from '../../core/my-verification-requests-list';
import { SUPPORT_CREATE_REQUEST_ROUTE_PATH } from '../../core/support-create-request';
import { BOOK_REVIEW_LIST_ROUTE_PATH } from '../../core/book-review-list';
import { BALANCE_DEPOSIT_ROUTE_PATH } from '../../core/balance-deposit';
import { ARBITRATION_REQUESTS_LIST_ROUTE_PATH } from '../../core/arbitration-requests-list';
import { SETTINGS_ROUTE_PATH } from '../../core/settings';
import { MY_REQUESTS_JURISTS_LIST_ROUTE_PATH } from '../../core/my-requests-jurists-list';
import { THEME_ARBITRATION_ROUTE_PATH } from '../../core/theme-arbitration';
import { DASHBOARD_ROUTE_PATH } from '../../core/dashboard';
import { LAWYER_REQUEST_ROUTE_PATH } from '../../core/lawyer-request';
import { COUNTERPARTY_ROUTE_PATH } from '../../core/counterparty';
import { COMPANY_MEMBERS_ROUTE_PATH } from '../../core/company-members';
import { REFERRAL_ROUTE_PATH } from '../../core/referral';
import { NEWS_ARTICLE_ROUTE_PATH } from '../../core/news-article';
import { ENTITY_ROUTE_PATH } from '../../core/entity';
import { BALANCE_ACTIVITY_ROUTE_PATH } from '../../core/balance-activity';
import { DASHBOARD_ADMIN_ROUTE_PATH } from '../../core/dashboard-admin';

export const routes = {
  [REFERRAL_ROUTE_PATH]: referralRouter,
  [NEWS_ARTICLE_ROUTE_PATH]: newsArticleRouter,
  [COMPANY_MEMBERS_ROUTE_PATH]: companyMembersRouter,
  [LAWYER_REQUEST_ROUTE_PATH]: lawyerRequestRouter,
  [DASHBOARD_ROUTE_PATH]: dashboardRouter,
  [ARBITRATION_REQUESTS_LIST_ROUTE_PATH]: arbitrationRequestsListRouter,
  [AUTH_RECOVERY_ACCOUNT_ROUTE_PATH]: AuthRecoveryAccountRouter,
  [AUTH_CHANGE_PASSWORD_ROUTE_PATH]: AuthChangePasswordRouter,
  [BALANCE_DEPOSIT_ROUTE_PATH]: balanceDepositRouter,
  [BOOK_REVIEW_LIST_ROUTE_PATH]: bookReviewListRouter,
  [LOGIN_ROUTE_PATH]: LoginRouter,
  [SIGNUP_ROUTE_PATH]: SignupRouter,
  [DIALOG_PERSONAL_ROUTE_PATH]: dialogPersonalRouter,
  [MY_COUNTERPARTIES_LIST_ROUTE_PATH]: myCounterpartiesListRouter,
  [MY_LEGAL_ENTITIES_LIST_ROUTE_PATH]: myLegalEntitiesListRouter,
  [MY_SUPPORT_REQUESTS_LIST_ROUTE_PATH]: mySupportRequestsListRouter,
  [MY_VERIFICATION_REQUESTS_LIST_ROUTE_PATH]: myVerificationRequestsListRouter,
  [SUPPORT_CREATE_REQUEST_ROUTE_PATH]: SupportCreateRequestRouter,
  [SETTINGS_ROUTE_PATH]: settingsRouter,
  [MY_REQUESTS_JURISTS_LIST_ROUTE_PATH]: MyRequestsJuristsListRouter,
  [THEME_ARBITRATION_ROUTE_PATH]: themeArbitrationRouter,
  [COUNTERPARTY_ROUTE_PATH]: counterpartyRouter,
  [ENTITY_ROUTE_PATH]: entityRouter,
  [BALANCE_ACTIVITY_ROUTE_PATH]: balanceActivityRouter,
  [DASHBOARD_ADMIN_ROUTE_PATH]: dashboardAdminRouter,
  [LAWYER_REQUEST_ROUTE_PATH]: lawyerRequestRouter,
};
export const Router = routesInit(routes);
