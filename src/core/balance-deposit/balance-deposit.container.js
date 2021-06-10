import { BalanceDepositComponent } from './balance-deposit.component';

import {
  BALANCE_DEPOSIT_FIELD_NAME,
  BALANCE_FORM_DEPOSIT_FIELD_NAME,
} from './balance-deposit.type';

export function BalanceDepositContainer() {
  const getInitialValue = () => {
    return {
      [BALANCE_DEPOSIT_FIELD_NAME.PAYMENT_METHOD]: 0,
      [BALANCE_DEPOSIT_FIELD_NAME.DEPOSIT_AMOUNT]: '',
    };
  };

  return (
    <BalanceDepositComponent
      isPending={true}
      isError={true}
      isSuccess={true}
      initialValue={getInitialValue()}
      fieldName={BALANCE_FORM_DEPOSIT_FIELD_NAME}
      pageLoading={true}
      errorMessage={'error'}
    />
  );
}
