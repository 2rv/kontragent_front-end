import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth';
import { CREATE_ARTICLE_ROUTE_PATH } from './article-create.constant';

export function createArticleRouter(ctx) {
  ctx.store.dispatch(setActivePath(CREATE_ARTICLE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
}
