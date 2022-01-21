import { setActivePath } from 'src/lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
} from 'src/lib/common/auth';
import { KONTRAGENT_IMPORT_ROUTE_PATH } from './kontragent-import.constant';

export function KontragentImportRouter(ctx) {
  ctx.store.dispatch(setActivePath(KONTRAGENT_IMPORT_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
