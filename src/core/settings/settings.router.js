import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';
import {
  SETTINGS_ROUTE_PATH,
  SETTINGS_PRIVATE_REDIRECT,
} from './settings.constant';

export function settingsRouter(ctx) {
  ctx.store.dispatch(setActivePath(SETTINGS_ROUTE_PATH));
  //   authRedirectPrivated(ctx, SETTINGS_PRIVATE_REDIRECT);
}
