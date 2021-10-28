import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin } from '../../lib/common/auth';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from './auth-verification-email.constant';
export function AuthVerificationEmailRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATION_EMAIL_ROUTE_PATH));
  authRedirectAdmin(ctx, '/')
  authRedirectPrivated(ctx, '/');
}
