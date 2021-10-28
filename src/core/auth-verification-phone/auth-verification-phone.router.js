import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin } from '../../lib/common/auth';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from './auth-verification-phone.constant';
export function AuthVerificationPhoneRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATION_PHONE_ROUTE_PATH));
  authRedirectAdmin(ctx, '/')
  authRedirectPrivated(ctx, '/');
}
