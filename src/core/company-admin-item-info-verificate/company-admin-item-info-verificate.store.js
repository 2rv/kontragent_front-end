import { COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE } from './company-admin-item-info-verificate.constant';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  verificateCompanyInfo: initRequestState(),
};

export function companyAdminItemInfoVerificateStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.VERIFICATE_PENDING:
      return {
        verificateCompanyInfo: setRequestPending(state.verificateCompanyInfo),
      };

    case COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.VERIFICATE_SUCCESS:
      return {
        verificateCompanyInfo: setRequestSuccess(state.verificateCompanyInfo),
      };

    case COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.VERIFICATE_ERROR:
      return {
        verificateCompanyInfo: setRequestError(
          state.verificateCompanyInfo,
          action.errorMessage,
        ),
      };
    case COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.CLEANUP:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
