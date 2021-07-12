import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_COUNTERPARTIES_LIST_ROUTE_PATH } from './my-counterparties-list.constant';

export function myCounterpartiesListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_COUNTERPARTIES_LIST_ROUTE_PATH));
}
