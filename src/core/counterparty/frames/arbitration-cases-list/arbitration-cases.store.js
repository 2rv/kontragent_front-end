import { ARBITRATION_CASES_ACTION_TYPE } from './arbitration-cases.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  arbitrationCases: initRequestState(),
};

export function counterpartyArbitrationCasesStore(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ARBITRATION_CASES_ACTION_TYPE.ARBITRATION_CASES_LOAD_REQUEST_PENDING:
      return {
        ...state,
        arbitrationCases: setRequestPending(state.arbitrationCases),
      };

    case ARBITRATION_CASES_ACTION_TYPE.ARBITRATION_CASES_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        arbitrationCases: setRequestSuccess(
          state.arbitrationCases,
          action.data,
        ),
      };

    case ARBITRATION_CASES_ACTION_TYPE.ARBITRATION_CASES_LOAD_REQUEST_ERROR:
      return {
        ...state,
        arbitrationCases: setRequestError(
          state.arbitrationCases,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
