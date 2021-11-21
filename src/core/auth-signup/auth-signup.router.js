import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import { AUTH_SIGNUP_ROUTE_PATH } from './auth-signup.constant';
export function AuthSignupRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_SIGNUP_ROUTE_PATH));
  if (authRedirectLogged(ctx, '/')) return;
}
