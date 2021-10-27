import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import { ACCOUNT_REFERAL_ROUTE_PATH } from './account-referal.constant';

export function AccountReferalRouter(ctx) {
  ctx.store.dispatch(setActivePath(ACCOUNT_REFERAL_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
}
