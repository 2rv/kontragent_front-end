import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { participantsLoad } from './participants.action';
import { ENTITY_PARTICIPANTS_STORE_NAME } from './participants.constant';
import { ParticipantsComponent } from './participants.component';

export function ParticipantsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ENTITY_PARTICIPANTS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(participantsLoad());
  //   }, []);

  return (
    <ParticipantsComponent
      isPending={isRequestPending(state.participants)}
      isError={isRequestError(state.participants)}
      isSuccess={isRequestSuccess(state.participants)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.participants)}
      participantsListData={participantsListData}
    />
  );
}

export const participantsListData = [
  {
    id: 1,
    image:
      'https://im.kommersant.ru/Issues.photo/CORP/2017/02/09/KMO_097065_08919_1_t218_221841.jpg',
    name: 'Джон Уик',
    status: 'ENTITY.PARTICIPANTS.STATUS.MANAGER',
    lastVisit: 'С марта 2020',
  },
  {
    id: 2,
    image:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg',
    name: 'Дуейн Джонсон',
    status: 'ENTITY.PARTICIPANTS.STATUS.OWNER',
    lastVisit: 'С июня 2021',
  },
  {
    id: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/250px-John_Cena_July_2018.jpg',
    name: 'Джон Сина',
    status: 'ENTITY.PARTICIPANTS.STATUS.ADVERTISER',
    lastVisit: '3 года назад',
  },
  {
    id: 1,
    image:
      'https://im.kommersant.ru/Issues.photo/CORP/2017/02/09/KMO_097065_08919_1_t218_221841.jpg',
    name: 'Джон Уик',
    status: 'ENTITY.PARTICIPANTS.STATUS.MANAGER',
    lastVisit: 'С марта 2020',
  },
  {
    id: 2,
    image:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg',
    name: 'Дуейн Джонсон',
    status: 'ENTITY.PARTICIPANTS.STATUS.OWNER',
    lastVisit: 'С июня 2021',
  },
  {
    id: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/250px-John_Cena_July_2018.jpg',
    name: 'Джон Сина',
    status: 'ENTITY.PARTICIPANTS.STATUS.ADVERTISER',
    lastVisit: '3 года назад',
  },
  {
    id: 1,
    image:
      'https://im.kommersant.ru/Issues.photo/CORP/2017/02/09/KMO_097065_08919_1_t218_221841.jpg',
    name: 'Джон Уик',
    status: 'ENTITY.PARTICIPANTS.STATUS.MANAGER',
    lastVisit: 'С марта 2020',
  },
  {
    id: 2,
    image:
      'https://thumbs.dfs.ivi.ru/storage9/contents/4/6/73d32a18fc5a27b6393f987eedfd63.jpg',
    name: 'Дуейн Джонсон',
    status: 'ENTITY.PARTICIPANTS.STATUS.OWNER',
    lastVisit: 'С июня 2021',
  },
  {
    id: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/John_Cena_July_2018.jpg/250px-John_Cena_July_2018.jpg',
    name: 'Джон Сина',
    status: 'ENTITY.PARTICIPANTS.STATUS.ADVERTISER',
    lastVisit: '3 года назад',
  },
];
