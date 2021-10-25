import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH } from './company-account-item-revision-item.constant';

export function CompanyAccountItemRevisionItemRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(COMPANY_ACCOUNT_ITEM_REVISION_ITEM_ROUTE_PATH),
  );
  authRedirectPrivated(ctx, '/');
}