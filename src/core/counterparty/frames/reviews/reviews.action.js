import { httpRequest } from '../../../../main/http';

import { REVIEWS_ACTION_TYPE } from './reviews.type';
import { REVIEWS_API } from './reviews.constant';

export function reviewsLoad() {
  return async (dispatch) => {
    dispatch({
      type: REVIEWS_ACTION_TYPE.REVIEWS_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: REVIEWS_API.REVIEWS_LOAD_DATA.TYPE,
        url: REVIEWS_API.REVIEWS_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: REVIEWS_ACTION_TYPE.REVIEWS_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: REVIEWS_ACTION_TYPE.REVIEWS_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
