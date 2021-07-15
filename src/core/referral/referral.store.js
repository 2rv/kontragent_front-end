import { REFERRAL_ACTION_TYPE } from './referral.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  referralList: initRequestState(),
};

export function referralStore(state = initialState, action) {
  switch (action.type) {
    case REFERRAL_ACTION_TYPE.REFERRAL_LOAD_REQUEST_PENDING:
      return {
        ...state,
        referralList: setRequestPending(state.referralList),
      };

    case REFERRAL_ACTION_TYPE.REFERRAL_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        referralList: setRequestSuccess(state.referralList, action.data),
      };

    case REFERRAL_ACTION_TYPE.REFERRAL_LOAD_REQUEST_ERROR:
      return {
        ...state,
        referralList: setRequestError(state.referralList, action.errorMessage),
      };

    default:
      return state;
  }
}
