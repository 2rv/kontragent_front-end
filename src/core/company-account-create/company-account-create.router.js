import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin, authRedirectVerification } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_CREATE_ROUTE_PATH } from './company-account-create.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant'
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant'

export function CompanyAccountCreateRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_CREATE_ROUTE_PATH));
  authRedirectAdmin(ctx, '/')
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx, AUTH_VERIFICATION_EMAIL_ROUTE_PATH, AUTH_VERIFICATION_PHONE_ROUTE_PATH)
}
