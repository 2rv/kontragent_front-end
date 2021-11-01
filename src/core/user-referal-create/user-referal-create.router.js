import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { USER_REFERAL_CREATE_ROUTE_PATH } from './user-referal-create.constant';
import { authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth'
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant'
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant'

export function UserReferalCreateRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_REFERAL_CREATE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx, AUTH_VERIFICATION_EMAIL_ROUTE_PATH, AUTH_VERIFICATION_PHONE_ROUTE_PATH)
}

