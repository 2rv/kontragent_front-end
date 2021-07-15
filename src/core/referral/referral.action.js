import { httpRequest } from '../../main/http';

import { REFERRAL_ACTION_TYPE } from './referral.type';
import { REFERRAL_API } from './referral.constant';

export function referralListLoad() {
  return async (dispatch) => {
    dispatch({
      type: REFERRAL_ACTION_TYPE.REFERRAL_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: REFERRAL_API.REFERRAL_LOAD_DATA.TYPE,
        url: REFERRAL_API.REFERRAL_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: REFERRAL_ACTION_TYPE.REFERRAL_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: REFERRAL_ACTION_TYPE.REFERRAL_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
