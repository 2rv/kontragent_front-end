import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  COMPANY_MEMBERS_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './company-members.constant';

export function companyMembersRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_MEMBERS_ROUTE_PATH));
}
