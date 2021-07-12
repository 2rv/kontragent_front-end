import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { DIALOGS_ROUTE_PATH } from './dialogs.constant';

export function DialogsRouter(ctx) {
  ctx.store.dispatch(setActivePath(DIALOGS_ROUTE_PATH));
}
