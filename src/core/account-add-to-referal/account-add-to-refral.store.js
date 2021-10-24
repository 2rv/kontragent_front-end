import { ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE } from './account-add-to-referal.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  addToReferalInfo: initRequestState(),
};

export function accountAddToReferalStore(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_PENDING:
      return {
        addToReferalInfo: setRequestPending(state.addToReferalInfo),
      };

    case ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_SUCCESS:
      return {
        addToReferalInfo: setRequestSuccess(state.addToReferalInfo),
      };

    case ACCOUNT_ADD_TO_REFERAL_ACTION_TYPE.ADD_TO_REFERAL_ERROR:
      return {
        addToReferalInfo: setRequestError(
          state.addToReferalInfo,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
