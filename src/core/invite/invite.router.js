import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import { INVITE_ROUTE_PATH } from './invite.constant';
export function InviteRouter(ctx) {
  ctx.store.dispatch(setActivePath(INVITE_ROUTE_PATH));
  // if (authRedirectLogged(ctx, '/')) return;
}
