import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { ADMIN_POST_LIST_ROUTE_PATH } from './admin-post-list.constant';

export function AdminPostListRouter(ctx) {
  ctx.store.dispatch(setActivePath(ADMIN_POST_LIST_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
