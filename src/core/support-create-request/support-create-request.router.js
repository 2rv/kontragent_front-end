import { authRedirectPrivated } from '../../lib/common/auth';
import { setActivePath } from '../../lib/common/navigation/navigation.action';
import {
  SUPPORT_CREATE_REQUEST_ROUTE_PATH,
  SUPPORT_CREATE_REQUEST_FORM_REDIRECT_ON_UPLOAD_PATH,
} from './support-create-request.constant';

export function SupportCreateRequestRouter(ctx) {
  ctx.store.dispatch(setActivePath(SUPPORT_CREATE_REQUEST_ROUTE_PATH));
  authRedirectPrivated(
    ctx,
    SUPPORT_CREATE_REQUEST_FORM_REDIRECT_ON_UPLOAD_PATH,
  );
}
