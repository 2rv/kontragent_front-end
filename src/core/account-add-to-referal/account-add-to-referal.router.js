import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  ACCOUNT_ADD_TO_REFERAL_ROUTE_PATH,
  ACCOUNT_ADD_TO_REFERAL_ROUTE_PATH_DYNAMIC,
} from './account-add-to-referal.constant';

export function AccountAddToReferalRouter(ctx) {
  ctx.store.dispatch(setActivePath(ACCOUNT_ADD_TO_REFERAL_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
}
