import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin, authRedirectVerification } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from './company-account-list.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant'
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant'

export function CompanyAccountListRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectAdmin(ctx, '/')
  authRedirectVerification(ctx, AUTH_VERIFICATION_EMAIL_ROUTE_PATH, AUTH_VERIFICATION_PHONE_ROUTE_PATH)
}
