import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { redZoneInformationLoad } from './red-zone-information.action';
import { COUNTERPARTY_RED_ZONE_INFORMATION_STORE_NAME } from './red-zone-information.constant';
import { RedZoneInformationComponent } from './red-zone-information.component';

export function RedZoneInformationContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COUNTERPARTY_RED_ZONE_INFORMATION_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(redZoneInformationLoad());
  //   }, []);

  return (
    <RedZoneInformationComponent
      isPending={isRequestPending(state.redZoneInformation)}
      isError={isRequestError(state.redZoneInformation)}
      isSuccess={isRequestSuccess(state.redZoneInformation)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.redZoneInformation)}
      dangerNoticeData={dangerNoticeData}
      waysResolveData={waysResolveData}
    />
  );
}

export const dangerNoticeData = [
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
const waysResolveData = [
  {
    name: 'check1',
    id: 1,
    title: 'Дополнительная проверка контрагента',
    description:
      'Идейные соображения высшего порядка, а также укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.',
    price: 1000,
    hasShadow: true,
    hasBlueBorder: false,
    hasGrayBackground: false,
  },
  {
    name: 'check2',
    id: 2,
    title: 'Очисткая истории',
    description:
      'Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения существенных финансовых и административных условий. Услуга дешевле полной очистки.',
    price: 2500,
    hasShadow: false,
    hasBlueBorder: true,
    hasGrayBackground: true,
  },
  {
    name: 'check3',
    id: 3,
    title: 'Дополнительная проверка контрагента',
    description:
      'Идейные соображения высшего порядка, а также укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. ',
    price: 2500,
    hasShadow: false,
    hasBlueBorder: true,
    hasGrayBackground: true,
  },
  {
    name: 'check4',
    id: 4,
    title: 'Очисткая истории',
    description:
      'Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения существенных финансовых и административных условий. Услуга дешевле полной очистки.',
    price: 3500,
    hasShadow: false,
    hasBlueBorder: false,
    hasGrayBackground: true,
  },
];
