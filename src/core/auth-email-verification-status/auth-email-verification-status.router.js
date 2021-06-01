import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { AUTH_EMAIL_VERIFICATION_STATUS_ROUTE_PATH } from './auth-email-verification-status.constant';
export function AuthEmailVerificationStatusRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_EMAIL_VERIFICATION_STATUS_ROUTE_PATH));
}
