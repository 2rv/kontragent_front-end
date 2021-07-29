import { DIALOG_LAWYER_ACTION_TYPE } from './dialog-lawyer.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  dialogLawyerData: initRequestState(),
};

export function dialogLawyerStore(state = initialState, action) {
  switch (action.type) {
    case DIALOG_LAWYER_ACTION_TYPE.DIALOG_LAWYER_LOAD_REQUEST_PENDING:
      return {
        ...state,
        dialogLawyerData: setRequestPending(state.dialogLawyerData),
      };

    case DIALOG_LAWYER_ACTION_TYPE.DIALOG_LAWYER_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        dialogLawyerData: setRequestSuccess(
          state.dialogLawyerData,
          action.data,
        ),
      };

    case DIALOG_LAWYER_ACTION_TYPE.DIALOG_LAWYER_LOAD_REQUEST_ERROR:
      return {
        ...state,
        dialogLawyerData: setRequestError(
          state.dialogLawyerData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
