import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH } from './company-account-item-revision-self-create.constant';

export function CompanyAccountItemRevisionSelfCreateRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_ROUTE_PATH),
  );
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
