import { httpRequest } from '../../main/http';
import { HEADER_ACTION_TYPE } from './header.type';
import { HEADER_API } from './header.constant';
import { performConvertNotificationData } from './header.convert';

export function headerNotificationLoadData() {
  return async (dispatch) => {
    dispatch({
      type: HEADER_ACTION_TYPE.HEADER_NOTIFICATION_LOAD_REQUEST_PENDING,
    });
    try {
      //   const res = await httpRequest({
      //     method: HEADER_API.HEADER_NOTIFICATION_LOAD_DATA.TYPE,
      //     url: HEADER_API.HEADER_NOTIFICATION_LOAD_DATA.ENDPOINT,
      //   });
      //   const data = performConvertNotificationData(res.data);
      dispatch({
        type: HEADER_ACTION_TYPE.HEADER_NOTIFICATION_LOAD_REQUEST_SUCCESS,
        data: [1, 2, 3, 4, 5, 6, 7],
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: HEADER_ACTION_TYPE.HEADER_NOTIFICATION_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
