import { BALANCE_DEPOSIT_FIELD_NAME } from './balance-deposit.type';
import { validate } from '../../main/validate';
import {
  required,
  numberPositiveMin,
} from '../../main/validate/validate.service';

const config = {
  [BALANCE_DEPOSIT_FIELD_NAME.DEPOSIT_AMOUNT]: [required, numberPositiveMin(1)],
};

export const balanceDepositFormValidation = (values) =>
  validate(values, config);
