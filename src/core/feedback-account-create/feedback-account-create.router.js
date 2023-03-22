import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  authRedirectPrivated,
  authRedirectVerification,
} from '../../lib/common/auth';
import { FEEDBACK_ACCOUNT_CREATE_ROUTE_PATH } from './feedback-account-create.constant';

export function FeedbackAccountCreatePageRouter(ctx) {
  ctx.store.dispatch(setActivePath(FEEDBACK_ACCOUNT_CREATE_ROUTE_PATH));
  if (authRedirectPrivated(ctx, '/')) return;
  if (authRedirectVerification(ctx)) return;
}
