import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectNotAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { USER_ADMIN_INVITE_ROUTE_PATH } from './user-admin-invite.constant';

export function UserAdminInviteRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ADMIN_INVITE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
  authRedirectNotAdmin(ctx, '/');
}
