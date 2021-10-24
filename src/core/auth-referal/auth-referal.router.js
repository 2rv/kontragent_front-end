import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { AUTH_REFERAL_ROUTE_PATH } from './auth-referal.constant';

export function AuthReferalRouter(ctx) {
  ctx.store.dispatch(setActivePath(AUTH_REFERAL_ROUTE_PATH));
}
