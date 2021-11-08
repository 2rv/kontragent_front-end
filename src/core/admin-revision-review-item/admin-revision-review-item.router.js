import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectNotAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH } from './admin-revision-review-item.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant';

export function AdminRevisionReviewItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(ADMIN_REVISION_REVIEW_ITEM_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectNotAdmin(ctx, '/');
  authRedirectVerification(
    ctx,
    AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
    AUTH_VERIFICATION_PHONE_ROUTE_PATH,
  );
}
