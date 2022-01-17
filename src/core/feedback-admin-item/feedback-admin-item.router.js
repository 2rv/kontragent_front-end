import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectNotAdmin,
  authRedirectVerification,
} from '../../lib/common/auth';
import { FEEDBACK_ADMIN_ITEM_ROUTE_PATH } from './feedback-admin-item.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant';

export function FeedbackAdminItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(FEEDBACK_ADMIN_ITEM_ROUTE_PATH));
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
