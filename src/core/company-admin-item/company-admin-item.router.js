import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ADMIN_ITEM_ROUTE_PATH } from './company-admin-item.constant';

export function CompanyAdminItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ADMIN_ITEM_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
  authRedirectNotAdmin(ctx, '/');
}
