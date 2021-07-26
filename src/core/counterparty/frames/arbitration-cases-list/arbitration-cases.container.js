import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { arbitrationCasesLoad } from './arbitration-cases.action';
import { COUNTERPARTY_ARBITRATION_CASES_STORE_NAME } from './arbitration-cases.constant';
import { ArbitrationCasesComponent } from './arbitration-cases.component';

export function ArbitrationCasesContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COUNTERPARTY_ARBITRATION_CASES_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(arbitrationCasesLoad());
  //   }, []);

  return (
    <ArbitrationCasesComponent
      isPending={isRequestPending(state.arbitrationCases)}
      isError={isRequestError(state.arbitrationCases)}
      isSuccess={isRequestSuccess(state.arbitrationCases)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.arbitrationCases)}
      arbitrationCasesListData={arbitrationCasesListData}
    />
  );
}

export const arbitrationCasesListData = [
  {
    id: 1,
    name: 'Джон Уик',
    image:
      'https://im.kommersant.ru/Issues.photo/CORP/2017/02/09/KMO_097065_08919_1_t218_221841.jpg',
    text: 'Жалоба на компанию AirBox',
    time: '15 минут назад',
    messages: '25',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.KONTRAGENT',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.RESOLVED',
      id: 0,
    },
  },
  {
    id: 2,
    name: 'Дуейн Джонсон',
    image:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg',
    text: 'Жалоба по теме нарушения налоговых правил компанией REFLEX',
    time: '40 минут назад',
    messages: '5',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.COMPLAINT',
      id: 1,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.UNDER_CONSIDERATION',
      id: 1,
    },
  },
  {
    id: 3,
    name: 'Джон Сина',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/250px-John_Cena_July_2018.jpg',
    text: 'Техническое нарушение договора компанией Ласточка Сейл Систем',
    time: 'Вчера',
    messages: '0',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.SUSPICION',
      id: 2,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.REJECTED',
      id: 2,
    },
  },
  {
    id: 1,
    name: 'Джон Уик',
    image:
      'https://im.kommersant.ru/Issues.photo/CORP/2017/02/09/KMO_097065_08919_1_t218_221841.jpg',
    text: 'Жалоба на компанию AirBox',
    time: '15 минут назад',
    messages: '25',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.KONTRAGENT',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.RESOLVED',
      id: 0,
    },
  },
  {
    id: 2,
    name: 'Дуейн Джонсон',
    image:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg',
    text: 'Жалоба по теме нарушения налоговых правил компанией REFLEX',
    time: '40 минут назад',
    messages: '5',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.COMPLAINT',
      id: 1,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.UNDER_CONSIDERATION',
      id: 1,
    },
  },
  {
    id: 3,
    name: 'Джон Сина',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/250px-John_Cena_July_2018.jpg',
    text: 'Техническое нарушение договора компанией Ласточка Сейл Систем',
    time: 'Вчера',
    messages: '0',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.SUSPICION',
      id: 2,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.REJECTED',
      id: 2,
    },
  },
  {
    id: 1,
    name: 'Джон Уик',
    image:
      'https://im.kommersant.ru/Issues.photo/CORP/2017/02/09/KMO_097065_08919_1_t218_221841.jpg',
    text: 'Жалоба на компанию AirBox',
    time: '15 минут назад',
    messages: '25',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.KONTRAGENT',
      id: 0,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.RESOLVED',
      id: 0,
    },
  },
  {
    id: 2,
    name: 'Дуейн Джонсон',
    image:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg',
    text: 'Жалоба по теме нарушения налоговых правил компанией REFLEX',
    time: '40 минут назад',
    messages: '5',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.COMPLAINT',
      id: 1,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.UNDER_CONSIDERATION',
      id: 1,
    },
  },
  {
    id: 3,
    name: 'Джон Сина',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/250px-John_Cena_July_2018.jpg',
    text: 'Техническое нарушение договора компанией Ласточка Сейл Систем',
    time: 'Вчера',
    messages: '0',
    status: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.TYPE.SUSPICION',
      id: 2,
    },
    info: {
      title: 'COUNTERPARTY.ARBITRATION_CASES.STATUS.REJECTED',
      id: 2,
    },
  },
];
