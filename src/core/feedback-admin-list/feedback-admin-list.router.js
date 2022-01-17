import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { FEEDBACK_ADMIN_LIST_ROUTE_PATH } from './feedback-admin-list.constant';

export function FeedbackAdminListRouter(ctx) {
  ctx.store.dispatch(setActivePath(FEEDBACK_ADMIN_LIST_ROUTE_PATH));
  if (authRedirectVerification(ctx)) return;
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectNotAdmin(ctx, '/')) return;
}
