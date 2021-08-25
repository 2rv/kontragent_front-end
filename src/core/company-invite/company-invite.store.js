import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';
import { COMPANY_INVITE_ACTION_TYPE } from './company-invite.type';

const initialState = {
  companyInvite: initRequestState(),
};

export function companyInviteStore(state = initialState, action) {
  switch (action.type) {
    case COMPANY_INVITE_ACTION_TYPE.COMPANY_INVITE_LOAD_DATA_PENDING:
      return {
        ...state,
        companyInvite: setRequestPending(state.companyInvite),
      };

    case COMPANY_INVITE_ACTION_TYPE.COMPANY_INVITE_LOAD_DATA_SUCCESS:
      return {
        ...state,
        companyInvite: setRequestSuccess(state.companyInvite, action.data),
      };

    case COMPANY_INVITE_ACTION_TYPE.COMPANY_INVITE_LOAD_DATA_ERROR:
      return {
        ...state,
        companyInvite: setRequestError(
          state.companyInvite,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
