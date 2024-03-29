import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';

import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH } from './company-account-item-revision-kontragent.constant';

export function CompanyAccountItemRevisionKontragentRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_ROUTE_PATH),
  );
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectAdmin(ctx, '/')) return;
}
