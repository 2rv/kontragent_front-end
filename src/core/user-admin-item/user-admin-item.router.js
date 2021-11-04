import { setActivePath } from '../../lib/common/navigation/navigation.action';

import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';

import { USER_ADMIN_ITEM_ROUTE_PATH } from './user-admin-item.constant';

export function UserAdminItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ADMIN_ITEM_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
  authRedirectNotAdmin(ctx);
}
