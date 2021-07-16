import { LAWYER_REQUEST_ACTION_TYPE } from './lawyer-request.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  lawyerRequest: initRequestState(),
};

export function lawyerRequestStore(state = initialState, action) {
  switch (action.type) {
    case LAWYER_REQUEST_ACTION_TYPE.LAWYER_REQUEST_LOAD_REQUEST_PENDING:
      return {
        ...state,
        lawyerRequest: setRequestPending(state.lawyerRequest),
      };

    case LAWYER_REQUEST_ACTION_TYPE.LAWYER_REQUEST_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        lawyerRequest: setRequestSuccess(state.lawyerRequest, action.data),
      };

    case LAWYER_REQUEST_ACTION_TYPE.LAWYER_REQUEST_LOAD_REQUEST_ERROR:
      return {
        ...state,
        lawyerRequest: setRequestError(
          state.lawyerRequest,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
