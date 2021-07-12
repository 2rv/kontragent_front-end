import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { KONTRAGENT_COMMENTS_ROUTE_PATH } from './kontragent-comments.constant';

export function KontragentCommentsRouter(ctx) {
  ctx.store.dispatch(setActivePath(KONTRAGENT_COMMENTS_ROUTE_PATH));
}
