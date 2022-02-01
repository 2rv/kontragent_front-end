import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH } from './company-account-item-kontragent-item.constant';

export function CompanyAccountItemKontragentItemRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(COMPANY_ACCOUNT_ITEM_KONTRAGENT_ITEM_ROUTE_PATH),
  );
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
