import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_KONTRAGENTS_ROUTE_PATH } from './company-account-kontragents.constant';

export function CompanyAccountKontragentsRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_KONTRAGENTS_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
