import { BALANCE_DEPOSIT_ACTION_TYPE } from './balance-deposit.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  balanceDepositForm: initRequestState(),
};

export function balanceDepositFormStore(state = initialState, action) {
  switch (action.type) {
    case BALANCE_DEPOSIT_ACTION_TYPE.BALANCE_FORM_DEPOSIT_UPLOAD_PENDING:
      return {
        ...state,
        balanceDepositForm: setRequestPending(state.balanceDepositForm),
      };

    case BALANCE_DEPOSIT_ACTION_TYPE.BALANCE_FORM_DEPOSIT_UPLOAD_SUCCESS:
      return {
        ...state,
        balanceDepositForm: setRequestSuccess(state.balanceDepositForm),
      };

    case BALANCE_DEPOSIT_ACTION_TYPE.BALANCE_FORM_DEPOSIT_UPLOAD_ERROR:
      return {
        ...state,
        balanceDepositForm: setRequestError(
          state.balanceDepositForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
