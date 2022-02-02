import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant';
import { ADMIN_REVISION_SELF_LIST_ROUTE_PATH } from './admin-revision-self-list.constant';

export function AdminRevisionSelfListRouter(ctx) {
  ctx.store.dispatch(setActivePath(ADMIN_REVISION_SELF_LIST_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectNotAdmin(ctx, '/')) return;
  if (
    authRedirectVerification(
      ctx,
      AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
      AUTH_VERIFICATION_PHONE_ROUTE_PATH,
    )
  )
    return;
}
