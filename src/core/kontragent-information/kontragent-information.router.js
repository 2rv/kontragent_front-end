import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { KONTRAGENT_INFORMATION_ROUTE_PATH } from './kontragent-information.constant';

export function kontragentInformationtRouter(ctx) {
  ctx.store.dispatch(setActivePath(KONTRAGENT_INFORMATION_ROUTE_PATH));
}
