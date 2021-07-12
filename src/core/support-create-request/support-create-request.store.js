import { SUPPORT_CREATE_REQUEST_ACTION_TYPE } from './support-create-request.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  supportCreateRequestForm: initRequestState(),
};

export function supportCreateRequestStore(state = initialState, action) {
  switch (action.type) {
    case SUPPORT_CREATE_REQUEST_ACTION_TYPE.SUPPORT_FORM_CREATE_REQUEST_UPLOAD_PENDING:
      return {
        ...state,
        supportCreateRequestForm: setRequestPending(
          state.supportCreateRequestForm,
        ),
      };

    case SUPPORT_CREATE_REQUEST_ACTION_TYPE.SUPPORT_FORM_CREATE_REQUEST_UPLOAD_SUCCESS:
      return {
        ...state,
        supportCreateRequestForm: setRequestSuccess(
          state.supportCreateRequestForm,
        ),
      };

    case SUPPORT_CREATE_REQUEST_ACTION_TYPE.SUPPORT_FORM_CREATE_REQUEST_UPLOAD_ERROR:
      return {
        ...state,
        supportCreateRequestForm: setRequestError(
          state.supportCreateRequestForm,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
