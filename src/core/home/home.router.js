import { HOME_ROUTE_PATH } from './home.constant';

import { setActivePath } from '../../lib/common/navigation';

export function homeRouter(ctx) {
  ctx.store.dispatch(setActivePath(HOME_ROUTE_PATH));
}
