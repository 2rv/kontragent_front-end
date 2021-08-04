import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  COMPANY_MEMBERS_ROUTE_PATH,
  REDIRECT_ON_MAIN_PAGE,
} from './company-members.constant';

export function companyMembersRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_MEMBERS_ROUTE_PATH));
  authRedirectPrivated(ctx, REDIRECT_ON_MAIN_PAGE);
}
