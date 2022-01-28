import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH } from './company-account-item-kontragent.constant';

export function CompanyAccountItemKontragentRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_ITEM_KONTRAGENT_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
