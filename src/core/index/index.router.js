import {
  authRedirectPrivated,
  authRedirectVerification,
  authRedirectNotAdmin,
  authRedirectAdmin,
} from '../../lib/common/auth';
import { HOME_ROUTE_PATH } from '../landing';
import { USER_ADMIN_LIST_ROUTE_PATH } from '../../core/user-admin-list';
import { COMPANY_ACCOUNT_LIST_ROUTE_PATH } from '../../core/company-account-list';
export function IndexRouter(ctx) {
  if (authRedirectPrivated(ctx, HOME_ROUTE_PATH)) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectNotAdmin(ctx, COMPANY_ACCOUNT_LIST_ROUTE_PATH)) return;
  if (authRedirectAdmin(ctx, USER_ADMIN_LIST_ROUTE_PATH)) return;
}
