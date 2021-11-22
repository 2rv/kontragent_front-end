import { setActivePath } from '../../lib/common/navigation';
import { authRedirectPrivated, authRedirectVerification } from '../../lib/common/auth';
import { EDIT_ARTICLE_ROUTE_PATH } from './article-edit.constant';

export function editArticleRouter(ctx) {
  ctx.store.dispatch(setActivePath(EDIT_ARTICLE_ROUTE_PATH));
  authRedirectPrivated(ctx, '/');
  authRedirectVerification(ctx);
}
