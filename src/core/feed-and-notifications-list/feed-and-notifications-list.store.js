import { FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE } from './feed-and-notifications-list.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../main/store/store.service';

const initialState = {
  feedAndNotificationsListData: initRequestState(),
};

export function feedAndNotificationsListStore(state = initialState, action) {
  switch (action.type) {
    case FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE.FEED_AND_NOTIFICATIONS_LIST_GET_DATA_REQUEST_PENDING:
      return {
        ...state,
        feedAndNotificationsListData: setRequestPending(
          state.feedAndNotificationsListData,
        ),
      };

    case FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE.FEED_AND_NOTIFICATIONS_LIST_GET_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        feedAndNotificationsListData: setRequestSuccess(
          state.feedAndNotificationsListData,
          action.data,
        ),
      };

    case FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE.FEED_AND_NOTIFICATIONS_LIST_GET_DATA_REQUEST_ERROR:
      return {
        ...state,
        feedAndNotificationsListData: setRequestError(
          state.feedAndNotificationsListData,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
