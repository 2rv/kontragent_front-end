import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import { HOME_ROUTE_PATH } from './landing.constant';

export function LandingRouter(ctx) {
  ctx.store.dispatch(setActivePath(HOME_ROUTE_PATH));
  if (authRedirectLogged(ctx, '/')) return;
}
