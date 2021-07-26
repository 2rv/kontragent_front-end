import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { riskRatingAssesssmentLoad } from './risk-rating-assessment.action';
import { RISK_RATING_ASSESSMENT_STORE_NAME } from './risk-rating-assessment.constant';
import { RiskRatingAssessmentComponent } from './risk-rating-assessment.component';

export function RiskRatingAssessmentContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[RISK_RATING_ASSESSMENT_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(riskRatingAssesssmentLoad());
  //   }, []);

  return (
    <RiskRatingAssessmentComponent
      isPending={isRequestPending(state.riskRatingAssesssment)}
      isError={isRequestError(state.riskRatingAssesssment)}
      isSuccess={isRequestSuccess(state.riskRatingAssesssment)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.riskRatingAssesssment)}
    />
  );
}
