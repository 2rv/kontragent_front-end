import { setActivePath } from '../../lib/common/navigation/navigation.action';

import { authRedirectNotAdmin, authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth';

import { USER_ADMIN_ITEM_ROUTE_PATH } from './user-admin-item.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant'
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant'

export function UserAdminItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_ADMIN_ITEM_ROUTE_PATH));
  authRedirectNotAdmin(ctx);
  authRedirectPrivated(ctx, '/')
  authRedirectVerification(ctx, AUTH_VERIFICATION_EMAIL_ROUTE_PATH, AUTH_VERIFICATION_PHONE_ROUTE_PATH)
}
