import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  COMPANY_INVITE_ROUTE_PATH,
  REDIRECT_ON_LOGIN,
} from './company-invite.constant';

export function companyInviteRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_INVITE_ROUTE_PATH));
  authRedirectPrivated(ctx, REDIRECT_ON_LOGIN);
}
