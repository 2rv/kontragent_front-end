import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { ARBITRATION_CASES_ROUTE_PATH } from './arbitration-cases.constant';

export function arbitrationCasesRouter(ctx) {
  ctx.store.dispatch(setActivePath(ARBITRATION_CASES_ROUTE_PATH));
}
