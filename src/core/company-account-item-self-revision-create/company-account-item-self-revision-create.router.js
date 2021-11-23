import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ROUTE_PATH } from './company-account-item-self-revision-create.constant';

export function CompanyAccountItemSelfRevisionCreateRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_ROUTE_PATH),
  );
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectAdmin(ctx, '/')) return;
}
