import {
  authRedirectLogged,
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { AUTH_SIGNUP_ROUTE_PATH } from '../../core/auth-signup/auth-signup.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../../core/auth-verification-email';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../../core/auth-verification-phone';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../core/user-admin-list/user-admin-list.constant';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../core/company-account-list/company-account-list.constant';
export function IndexRouter(ctx) {

  authRedirectPrivated(ctx, AUTH_SIGNUP_ROUTE_PATH);

  authRedirectVerification(
    ctx,
    AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
    AUTH_VERIFICATION_PHONE_ROUTE_PATH,
  );
  authRedirectAdmin(ctx, USER_ADMIN_LIST_ROUTE_PATH);
  authRedirectLogged(ctx, COMPANY_ACCOUNT_LIST_ROUTE_PATH);
}
