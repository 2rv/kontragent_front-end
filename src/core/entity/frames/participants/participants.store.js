import { PARTICIPANTS_ACTION_TYPE } from './participants.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  participants: initRequestState(),
};

export function entityParticipantsStore(state = initialState, action) {
  switch (action.type) {
    case PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_LOAD_REQUEST_PENDING:
      return {
        ...state,
        participants: setRequestPending(state.participants),
      };

    case PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        participants: setRequestSuccess(state.participants, action.data),
      };

    case PARTICIPANTS_ACTION_TYPE.PARTICIPANTS_LOAD_REQUEST_ERROR:
      return {
        ...state,
        participants: setRequestError(
          state.participants,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
