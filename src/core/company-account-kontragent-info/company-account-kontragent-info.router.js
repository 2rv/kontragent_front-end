import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_KONTRAGENT_INFO_ROUTE_PATH } from './company-account-kontragent-info.constant';

export function CompanyAccountKontragentItemInfoRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_KONTRAGENT_INFO_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return
  if (authRedirectVerification(ctx)) return
}
