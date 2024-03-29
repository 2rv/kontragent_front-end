import { setActivePath } from '../../lib/common/navigation/navigation.action';

import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';

import { USER_ADMIN_ITEM_INFO_ROUTE_PATH } from './user-admin-item-info.constant';

export function UserAdminItemInfoRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ADMIN_ITEM_INFO_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectNotAdmin(ctx)) return;
}
