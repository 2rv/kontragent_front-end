import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated, authRedirectAdmin } from '../../lib/common/auth';
import { SETTINGS_ROUTE_PATH } from './settings.constant';

export function SettingsRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
}
