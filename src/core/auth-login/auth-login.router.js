import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import { AUTH_LOGIN_ROUTE_PATH } from './auth-login.constant';
export function AuthLoginRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_LOGIN_ROUTE_PATH));
  if (authRedirectLogged(ctx, '/')) return;
}
