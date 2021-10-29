import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import { USER_REFERAL_BALANCE_ROUTE_PATH } from './user-referal-balance.constant';
export function UserReferalBalanceRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_REFERAL_BALANCE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
}
