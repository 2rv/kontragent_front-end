import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from './user-referal-system.constant';
export function UserReferalSystemRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_REFERAL_SYSTEM_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectAdmin(ctx, '/')) return;
}
