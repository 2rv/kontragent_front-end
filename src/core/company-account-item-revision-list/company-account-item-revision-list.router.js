import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  redirectUnavailableCompanyPage,
} from '../../lib/common/auth';

import { COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH } from './company-account-item-revision-list.constant';

export function CompanyAccountItemRevisionListRouter(ctx) {
  ctx.store.dispatch(
    setActivePath(COMPANY_ACCOUNT_ITEM_REVISION_LIST_ROUTE_PATH),
  );
  authRedirectAdmin(ctx, '/');
  authRedirectPrivated(ctx, '/');
  redirectUnavailableCompanyPage(ctx, '/');
}
