import { RED_ZONE_INFORMATION_ACTION_TYPE } from './red-zone-information.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  redZoneInformation: initRequestState(),
};

export function redZoneInformationStore(state = initialState, action) {
  switch (action.type) {
    case RED_ZONE_INFORMATION_ACTION_TYPE.RED_ZONE_INFORMATION_LOAD_REQUEST_PENDING:
      return {
        ...state,
        redZoneInformation: setRequestPending(state.redZoneInformation),
      };

    case RED_ZONE_INFORMATION_ACTION_TYPE.RED_ZONE_INFORMATION_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        redZoneInformation: setRequestSuccess(state.redZoneInformation, action.data),
      };

    case RED_ZONE_INFORMATION_ACTION_TYPE.RED_ZONE_INFORMATION_LOAD_REQUEST_ERROR:
      return {
        ...state,
        redZoneInformation: setRequestError(
          state.redZoneInformation,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
