import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
  AUTH_VERIFICATION_EMAIL_REDIRECT_UNAUTHORIZED_PATH,
} from './auth-verification-email.constant';
export function AuthRecoveryAccountRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_VERIFICATION_EMAIL_ROUTE_PATH));
  authRedirectPrivated(ctx, AUTH_VERIFICATION_EMAIL_REDIRECT_UNAUTHORIZED_PATH);
}
