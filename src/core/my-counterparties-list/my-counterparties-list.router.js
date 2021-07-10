import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  MY_COUNTERPARTIES_LIST_ROUTE_PATH,
  MY_COUNTERPARTIES_LIST_REDIRECT_ON_LOGGED_PATH,
} from './my-counterparties-list.constant';

export function myCounterpartiesListRouter(ctx) {
  ctx.store.dispatch(setActivePath(MY_COUNTERPARTIES_LIST_ROUTE_PATH));
  authRedirectLogged(ctx, MY_COUNTERPARTIES_LIST_REDIRECT_ON_LOGGED_PATH);
}
