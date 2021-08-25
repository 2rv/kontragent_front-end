import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  NEWS_ARTICLE_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './news-article.constant';

export function newsArticleRouter(ctx) {
  ctx.store.dispatch(setActivePath(NEWS_ARTICLE_ROUTE_PATH));
}
