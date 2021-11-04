import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { COMPANY_ADMIN_ITEM_ROUTE_PATH } from './company-admin-item.constant';
import { AUTH_VERIFICATION_EMAIL_ROUTE_PATH } from '../auth-verification-email/auth-verification-email.constant';
import { AUTH_VERIFICATION_PHONE_ROUTE_PATH } from '../auth-verification-phone/auth-verification-phone.constant';

export function CompanyAdminItemRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ADMIN_ITEM_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(
    ctx,
    AUTH_VERIFICATION_EMAIL_ROUTE_PATH,
    AUTH_VERIFICATION_PHONE_ROUTE_PATH,
  );
  authRedirectNotAdmin(ctx, '/');
}
