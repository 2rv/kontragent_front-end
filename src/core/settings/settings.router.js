import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';

export function SettingsRouter(ctx) {
  ctx.store.dispatch(setActivePath('/settings'));
  authRedirectPrivated(ctx, '/');
}
