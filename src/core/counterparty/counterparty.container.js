import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterpartyComponent } from './counterparty.component';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { COUNTERPARTY_STORE_NAME } from './counterparty.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { InformationContainer } from './frames/information';
import { RiskRatingAssessmentContainer } from './frames/risk-rating-assessment';
import { ReviewsContainer } from './frames/reviews';
import { VerificationsContainer } from './frames/verifications';
import { ArbitrationCasesContainer } from './frames/arbitration-cases';
import { RedZoneInformationContainer } from './frames/red-zone-information';

export function CounterpartyContainer() {
  const dispatch = useDispatch();
  const [ activeTabId, setActiveTabId ] = React.useState(1);
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COUNTERPARTY_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(counterpartyLoad());
  //   }, []);

  const activeTabHandler = (tab) => {
    setActiveTabId(tab.id);
  };

  return (
    <CounterpartyComponent
      isPending={isRequestPending(state.counterparty)}
      isError={isRequestError(state.counterparty)}
      isSuccess={isRequestSuccess(state.counterparty)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.counterparty)}
      tabsList={TABS_LIST}
      tabsComponentList={TABS_COMPONENT_LIST}
      activeTabId={activeTabId}
      activeTabHandler={activeTabHandler}
    />
  );
}

const TABS_LIST = [
  { id: 1, text: 'COUNTERPARTY.TABS.DETAIL_INFORMATION' },
  { id: 2, text: 'COUNTERPARTY.TABS.RISK_RATING_AND_ASSESSMENT' },
  { id: 3, text: 'COUNTERPARTY.TABS.TESTIMONIALS' },
  { id: 4, text: 'COUNTERPARTY.TABS.VERIFICATIONS' },
  { id: 5, text: 'COUNTERPARTY.TABS.ARBITRATION_CASES' },
  { id: 6, text: 'COUNTERPARTY.TABS.RED_ZONE', hasDangerNotices: true },
];

const TABS_COMPONENT_LIST = [
  { id: 1, component: <InformationContainer /> },
  { id: 2, component: <RiskRatingAssessmentContainer /> },
  { id: 3, component: <ReviewsContainer /> },
  { id: 4, component: <VerificationsContainer /> },
  { id: 5, component: <ArbitrationCasesContainer /> },
  { id: 6, component: <RedZoneInformationContainer /> },
];
