import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { USER_ADMIN_LIST_ROUTE_PATH } from './user-admin-list.constant';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';

export function UserAdminListRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ADMIN_LIST_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
  authRedirectNotAdmin(ctx, '/');
}
