import { setActivePath } from '../../lib/common/navigation/navigation.action';
import { BALANCE_DEPOSIT_ROUTE_PATH } from './balance-deposit.constant';
export function balanceDepositRouter(ctx) {
  ctx.store.dispatch(setActivePath(BALANCE_DEPOSIT_ROUTE_PATH));
}
