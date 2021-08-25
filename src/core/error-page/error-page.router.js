import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { ERROR_PAGE_ROUTE_PATH } from './error-page.constant';

export function errorPageRouter(ctx) {
  ctx.store.dispatch(setActivePath(ERROR_PAGE_ROUTE_PATH));
}
