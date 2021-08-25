import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { THEME_ARBITRATION_ROUTE_PATH } from './theme-arbitration.constant';

export function themeArbitrationRouter(ctx) {
  ctx.store.dispatch(setActivePath(THEME_ARBITRATION_ROUTE_PATH));
}
