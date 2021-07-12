import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { BOOK_REVIEW_LIST_ROUTE_PATH } from './book-review-list.constant';

export function bookReviewListRouter(ctx) {
  ctx.store.dispatch(setActivePath(BOOK_REVIEW_LIST_ROUTE_PATH));
}
