import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectVerificatedEmail } from '../../lib/common/auth';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from './auth-verification-email.constant';
export function AuthVerificationEmailRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATION_EMAIL_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerificatedEmail(ctx)) return;
}
