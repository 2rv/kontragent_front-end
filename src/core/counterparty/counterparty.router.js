import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { COUNTERPARTY_ROUTE_PATH } from './counterparty.constant';

export function counterpartyRouter(ctx) {
  ctx.store.dispatch(setActivePath(COUNTERPARTY_ROUTE_PATH));
}
