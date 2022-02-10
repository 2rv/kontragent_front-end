import { setActivePath } from 'src/lib/common/navigation/navigation.action';
import {
  authRedirectNotAdmin,
  authRedirectPrivated,
  authRedirectVerification,
} from 'src/lib/common/auth';
import { COMPANY_ADMIN_IMPORT_FORM_ROUTE_PATH } from './company-admin-import-form.constant';

export function CompanyAdminImportFormRouter(ctx) {
  ctx.store.dispatch(setActivePath(COMPANY_ADMIN_IMPORT_FORM_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
  if (authRedirectNotAdmin(ctx, '/')) return;
}
