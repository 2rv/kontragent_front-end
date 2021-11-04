import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { USER_REFERAL_SYSTEM_ROUTE_PATH } from './user-referal-system.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant';
export function UserReferalSystemRouter(ctx) {
  ctx.store.dispatch(setActivePath(USER_REFERAL_SYSTEM_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(
    ctx,
    AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
    AUTH_VERIFICATION_PHONE_ROUTE_PATH,
  );
  authRedirectAdmin(ctx, '/');
}
