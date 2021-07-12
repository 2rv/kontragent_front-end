import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { SETTINGS_ROUTE_PATH } from './settings.constant';
export function settingsRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_ROUTE_PATH));
}
