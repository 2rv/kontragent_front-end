import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from './user-referal-balance.constant';

export function UserReferalBalanceRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_REFERAL_BALANCE_ROUTE_PATH));

  authRedirectPrivated(ctx, '/');
  if (authRedirectPrivated(ctx, '/')) return;

  authRedirectVerification(ctx);
  if (authRedirectVerification(ctx)) return;

  authRedirectAdmin(ctx, '/');
  if (authRedirectAdmin(ctx, '/')) return;
}
