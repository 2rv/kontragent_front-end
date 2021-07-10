import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  MY_LEGAL_ENTITIES_LIST_ROUTE_PATH,
  MY_LEGAL_ENTITIES_LIST_REDIRECT_ON_LOGGED_PATH,
} from './my-legal-entities-list.constant';

export function myLegalEntitiesListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_LEGAL_ENTITIES_LIST_ROUTE_PATH));
  authRedirectLogged(ctx, MY_LEGAL_ENTITIES_LIST_REDIRECT_ON_LOGGED_PATH);
}
