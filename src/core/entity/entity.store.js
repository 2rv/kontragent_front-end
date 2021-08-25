import { ENTITY_ACTION_TYPE } from './entity.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  entity: initRequestState(),
};

export function entityStore(state = initialState, action) {
  switch (action.type) {
    case ENTITY_ACTION_TYPE.ENTITY_LOAD_REQUEST_PENDING:
      return {
        ...state,
        entity: setRequestPending(state.entity),
      };

    case ENTITY_ACTION_TYPE.ENTITY_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        entity: setRequestSuccess(state.entity, action.data),
      };

    case ENTITY_ACTION_TYPE.ENTITY_LOAD_REQUEST_ERROR:
      return {
        ...state,
        entity: setRequestError(
          state.entity,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
