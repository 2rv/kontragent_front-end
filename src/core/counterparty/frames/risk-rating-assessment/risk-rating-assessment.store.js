import { RISK_RATING_ASSESSMENT_ACTION_TYPE } from './risk-rating-assessment.type';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
  setRequestError,
} from '../../../../main/store/store.service';

const initialState = {
  riskRatingAssesssment: initRequestState(),
};

export function counterpartyRiskRatingAssesssmentStore(state = initialState, action) {
  switch (action.type) {
    case RISK_RATING_ASSESSMENT_ACTION_TYPE.RISK_RATING_ASSESSMENT_LOAD_REQUEST_PENDING:
      return {
        ...state,
        riskRatingAssesssment: setRequestPending(state.riskRatingAssesssment),
      };

    case RISK_RATING_ASSESSMENT_ACTION_TYPE.RISK_RATING_ASSESSMENT_LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        riskRatingAssesssment: setRequestSuccess(state.riskRatingAssesssment, action.data),
      };

    case RISK_RATING_ASSESSMENT_ACTION_TYPE.RISK_RATING_ASSESSMENT_LOAD_REQUEST_ERROR:
      return {
        ...state,
        riskRatingAssesssment: setRequestError(
          state.riskRatingAssesssment,
          action.errorMessage,
        ),
      };

    default:
      return state;
  }
}
