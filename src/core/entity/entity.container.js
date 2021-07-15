import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EntityComponent } from './entity.component';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { ENTITY_STORE_NAME } from './entity.constant';
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
import { ParticipantsContainer } from './frames/participants';
import { BalanceContainer } from './frames/balance';
import { SettingsContainer } from './frames/settings';

export function EntityContainer() {
  const dispatch = useDispatch();
  const [ activeTabId, setActiveTabId ] = React.useState(1);
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ENTITY_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(entityDataLoad());
  //   }, []);

  const activeTabHandler = (tab) => {
    setActiveTabId(tab.id);
  };

  return (
    <EntityComponent
      isPending={isRequestPending(state.bookReviewList)}
      isError={isRequestError(state.bookReviewList)}
      isSuccess={isRequestSuccess(state.bookReviewList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.bookReviewList)}
      tabsList={TABS_LIST}
      tabsComponentList={TABS_COMPONENT_LIST}
      activeTabId={activeTabId}
      activeTabHandler={activeTabHandler}
    />
  );
}

const TABS_LIST = [
  { id: 1, text: 'Детальная информация' },
  { id: 2, text: 'Рейтинг и оценка рисков' },
  { id: 3, text: 'Отзывы' },
  { id: 4, text: 'Проверки' },
  { id: 5, text: 'Арбитражные дела' },
  { id: 6, text: 'Участники' },
  { id: 7, text: 'Баланс' },
  { id: 8, text: 'Настройка' },
];

const TABS_COMPONENT_LIST = [
  { id: 1, component: <InformationContainer /> },
  { id: 2, component: <RiskRatingAssessmentContainer /> },
  { id: 3, component: <ReviewsContainer /> },
  { id: 4, component: <VerificationsContainer /> },
  { id: 5, component: <ArbitrationCasesContainer /> },
  { id: 6, component: <ParticipantsContainer /> },
  { id: 7, component: <BalanceContainer /> },
  { id: 8, component: <SettingsContainer /> },
];
