import { httpRequest } from '../../../../main/http';

import { RISK_RATING_ASSESSMENT_ACTION_TYPE } from './risk-rating-assessment.type';
import { RISK_RATING_ASSESSMENT_API } from './risk-rating-assessment.constant';

export function riskRatingAssesssmentLoad() {
  return async (dispatch) => {
    dispatch({
      type: RISK_RATING_ASSESSMENT_ACTION_TYPE.RISK_RATING_ASSESSMENT_LOAD_REQUEST_PENDING,
    });

    try {
      const res = await httpRequest({
        method: RISK_RATING_ASSESSMENT_API.RISK_RATING_ASSESSMENT_LOAD_DATA.TYPE,
        url: RISK_RATING_ASSESSMENT_API.RISK_RATING_ASSESSMENT_LOAD_DATA.ENDPOINT,
      });

      dispatch({
        type: RISK_RATING_ASSESSMENT_ACTION_TYPE.RISK_RATING_ASSESSMENT_LOAD_REQUEST_SUCCESS,
        action: { data: res.data },
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: RISK_RATING_ASSESSMENT_ACTION_TYPE.RISK_RATING_ASSESSMENT_LOAD_REQUEST_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };
}
