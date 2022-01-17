import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { ADMIN_REVISION_REVIEW_ROUTE_PATH } from './admin-revision-review.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant';

export function AdminRevisionReviewRouter(ctx) {
  ctx.store.dispatch(setActivePath(ADMIN_REVISION_REVIEW_ROUTE_PATH));
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
