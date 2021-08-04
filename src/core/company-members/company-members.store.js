import { COMPANY_MEMBERS_ACTION_TYPE } from './company-members.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  companyMembersListData: initRequestState(),
  companyInfoData: initRequestState(),
};

export function companyMembersStore(state = initialState, action) {
  switch (action.type) {
    case COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_PENDING:
      return {
        ...state,
        companyMembersListData: setRequestPending(state.companyMembersListData),
      };
    case COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        companyMembersListData: setRequestSuccess(
          state.companyMembersListData,
          action.data,
        ),
      };
    case COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_ERROR:
      return {
        ...state,
        companyMembersListData: setRequestError(
          state.companyMembersListData,
          action.errorMessage,
        ),
      };
    case COMPANY_MEMBERS_ACTION_TYPE.COMPANY_MEMBERS_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        companyInfoData: setRequestSuccess(state.companyInfoData, action.data),
      };
    case COMPANY_MEMBERS_ACTION_TYPE.DELETE_USER_COMPANY_REQUEST_SUCCESS:
      return {
        ...state,
        companyInfoData: setRequestSuccess(state.companyInfoData, action.data),
      };
    default:
      return state;
  }
}
