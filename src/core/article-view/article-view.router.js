import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth';
import { ARTICLE_ROUTE_PATH } from './article-view.constant';

export function articleRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARTICLE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
}
