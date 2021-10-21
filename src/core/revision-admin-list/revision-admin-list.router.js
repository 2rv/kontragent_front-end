import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from './revision-admin-list.constant';

export function RevisionAdminListRouter(ctx) {
  ctx.store.dispatch(setActivePath(REVISION_ADMIN_LIST_ROUTE_PATH));
}
