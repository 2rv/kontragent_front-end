import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH } from './company-account-item-info.constant';

export function CompanyAccountItemInfoRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_ITEM_INFO_ROUTE_PATH));
  authRedirectAdmin(ctx, '/')
  authRedirectPrivated(ctx, '/');
}
