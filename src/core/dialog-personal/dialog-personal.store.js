import { DIALOG_PERSONAL_ACTION_TYPE } from './dialog-personal.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  dialogPersonalData: initRequestState(),
};

export function dialogPersonalStore(state = initialState, action) {
  switch (action.type) {
    case DIALOG_PERSONAL_ACTION_TYPE.DIALOG_PERSONAL_LOAD_REQUEST_PENDING:
      return {
        ...state,
        dialogPersonalData: setRequestPending(state.dialogPersonalData),
      };

    case DIALOG_PERSONAL_ACTION_TYPE.DIALOG_PERSONAL_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        dialogPersonalData: setRequestSuccess(
          state.dialogPersonalData,
          action.data,
        ),
      };

    case DIALOG_PERSONAL_ACTION_TYPE.DIALOG_PERSONAL_LOAD_REQUEST_ERROR:
      return {
        ...state,
        dialogPersonalData: setRequestError(
          state.dialogPersonalData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
