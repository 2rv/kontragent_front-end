import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { ENTITY_ROUTE_PATH } from './entity.constant';

export function entityRouter(ctx) {
  ctx.store.dispatch(setActivePath(ENTITY_ROUTE_PATH));
}
