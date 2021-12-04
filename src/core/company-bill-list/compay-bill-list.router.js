import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_BILL_LIST_ROUTE_PATH } from './company-bill-list.constant';

export function CompanyBillListRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_BILL_LIST_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectAdmin(ctx, '/')) return;
}
