import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectAdmin,
  redirectUnavailableCompanyPage,
} from '../../lib/common/auth';
import { COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH } from './company-account-item-member.constant';

export function CompanyAccountItemMemberRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ACCOUNT_ITEM_MEMBER_ROUTE_PATH));
  authRedirectAdmin(ctx, '/');
  authRedirectPrivated(ctx, '/');
  redirectUnavailableCompanyPage(ctx, '/');
}
