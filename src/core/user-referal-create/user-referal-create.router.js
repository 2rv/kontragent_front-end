import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { USER_REFERAL_CREATE_ROUTE_PATH } from './user-referal-create.constant';
import {
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectAdmin,
} from '../../lib/common/auth';

export function UserReferalCreateRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_REFERAL_CREATE_ROUTE_PATH));

  authRedirectPrivated(ctx, '/');
  if (authRedirectPrivated(ctx, '/')) return;

  authRedirectVerification(ctx);
  if (authRedirectVerification(ctx)) return;

  authRedirectAdmin(ctx, '/');
  if (authRedirectAdmin(ctx, '/')) return;
}
