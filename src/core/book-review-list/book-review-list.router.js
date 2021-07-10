import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectLogged } from '../../lib/common/auth';
import {
  BOOK_REVIEW_LIST_ROUTE_PATH,
  SIGNUP_REDIRECT_ON_LOGGED_PATH,
} from './book-review-list.constant';

export function bookReviewListRouter(ctx) {
  ctx.store.dispatch(setActivePath(BOOK_REVIEW_LIST_ROUTE_PATH));
  authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED_PATH);
}
