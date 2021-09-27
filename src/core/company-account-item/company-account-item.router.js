import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { authRedirectPrivated } from '../../lib/common/auth';

export function CompanyAccountItemRouter(ctx) {
  ctx.store.dispatch(setActivePath('/company'));
  authRedirectPrivated(ctx, '/');
}
