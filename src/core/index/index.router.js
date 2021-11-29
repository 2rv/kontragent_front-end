import {
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectNotAdmin,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { AUTH_SIGNUP_ROUTE_PATH } from '../../core/auth-signup/auth-signup.constant';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../core/user-admin-list/user-admin-list.constant';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../core/company-account-list/company-account-list.constant';
export function IndexRouter(ctx) {
  if (authRedirectPrivated(ctx, AUTH_SIGNUP_ROUTE_PATH)) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectNotAdmin(ctx, COMPANY_ACCOUNT_LIST_ROUTE_PATH)) return;
  if (authRedirectAdmin(ctx, USER_ADMIN_LIST_ROUTE_PATH)) return;
}
