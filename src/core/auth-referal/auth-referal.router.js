import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { AUTH_REFERAL_ROUTE_PATH } from './auth-referal.constant';
import { authRedirectLogged, authRedirectAdmin } from '../../lib/common/auth';

export function AuthReferalRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_REFERAL_ROUTE_PATH));
  authRedirectLogged(ctx, '/');
  if (authRedirectLogged(ctx, '/')) return;
}
