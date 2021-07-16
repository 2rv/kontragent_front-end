import { httpRequest } from '../../main/http';

import { FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE } from './feed-and-notifications-list.type';
import { FEED_AND_NOTIFICATIONS_LIST_API } from './feed-and-notifications-list.constant';

export function feedAndNotificationsListLoadData() {
  return async (dispatch) => {
    dispatch({
      type: FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE.FEED_AND_NOTIFICATIONS_LIST_GET_DATA_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method:
          FEED_AND_NOTIFICATIONS_LIST_API.FEED_AND_NOTIFICATIONS_LIST_GET_DATA
            .TYPE,
        url: FEED_AND_NOTIFICATIONS_LIST_API
          .FEED_AND_NOTIFICATIONS_LIST_GET_DATA.ENDPOINT,
      });

      dispatch({
        type: FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE.FEED_AND_NOTIFICATIONS_LIST_GET_DATA_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: FEED_AND_NOTIFICATIONS_LIST_ACTION_TYPE.FEED_AND_NOTIFICATIONS_LIST_GET_DATA_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
