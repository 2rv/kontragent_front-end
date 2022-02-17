import { httpRequest } from '../../main/http';
import {
  LANDING_FOOTER_API as API,
  LANDING_FOOTER_ACTION_TYPE as ACTION_TYPE,
} from './landing-footer.constant';

export function getAnalyticsAction() {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPE.REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: API.GET_ANALYTICS.TYPE,
        url: API.GET_ANALYTICS.ENDPOINT,
      });

      dispatch({
        type: ACTION_TYPE.REQUEST_SUCCESS,
        data: res.data,
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
      if (error.response) {
        dispatch({
          type: ACTION_TYPE.REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
