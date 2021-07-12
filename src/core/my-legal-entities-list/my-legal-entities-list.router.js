import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { MY_LEGAL_ENTITIES_LIST_ROUTE_PATH } from './my-legal-entities-list.constant';

export function myLegalEntitiesListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_LEGAL_ENTITIES_LIST_ROUTE_PATH));
}
