import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  COMPANY_MEMBERS_ROUTE_PATH,
  COMPANY_MEMBERS_REDIRECT_PATH,
  COMPANY_MEMBERS_QUERY_PATH,
} from './company-members.constant';
import { codeVerificationRedirectNoCode } from 'src/lib/common/code-verification';

export function companyMembersRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_MEMBERS_ROUTE_PATH));
  authRedirectPrivated(ctx, COMPANY_MEMBERS_REDIRECT_PATH);
}
