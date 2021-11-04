import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_CREATE_ROUTE_PATH } from './company-account-create.constant';

export function CompanyAccountCreateRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_CREATE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
  authRedirectAdmin(ctx, '/');
}
