import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { informationLoad } from './information.action';
import { COUNTERPARTY_INFORMATION_STORE_NAME } from './information.constant';
import { InformationComponent } from './information.component';

export function InformationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COUNTERPARTY_INFORMATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(informationLoad());
  //   }, []);

  return (
    <InformationComponent
      isPending={isRequestPending(state.information)}
      isError={isRequestError(state.information)}
      isSuccess={isRequestSuccess(state.information)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.information)}
      dangerNoticeList={dangerNoticeList}
    />
  );
}
export const dangerNoticeList = [
  {
    id: 1,
    title:
      'По состоянию на 2021-05-14 действовали ограничения на операции по банковским счетам организации, установленные ИФНС',
    description:
      'Это означает, что в отношении данной организации ИФНС отправляла в банки своё решение о частичном или полном прекращении расходных операций по счетам (ст. 76 НК РФ). В настоящий момент это решение может быть уже отменено, а расходные операции разрешены.',
  },
  {
    id: 2,
    title:
      'Выявлены совпадения по критериям фирм-однодневок, установленных действующим законодательством',
  },
];
