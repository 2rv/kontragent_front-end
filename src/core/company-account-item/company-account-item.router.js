import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_ROUTE_PATH } from './company-account-item.constant';

export function CompanyAccountItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_ITEM_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
}
