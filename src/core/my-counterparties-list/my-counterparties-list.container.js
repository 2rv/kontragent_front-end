import { useEffect } from 'react';
import { myCounterpartiesListLoad } from './my-counterparties-list.action';
import { MyCounterpartiesListComponent } from './my-counterparties-list.component';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { MY_COUNTERPARTIES_LIST_STORE_NAME } from './my-counterparties-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyCounterpartiesListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_COUNTERPARTIES_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(myCounterpartiesListLoad());
  //   }, []);

  return (
    <MyCounterpartiesListComponent
      isPending={isRequestPending(state.myCounterpartiesList)}
      isError={isRequestError(state.myCounterpartiesList)}
      isSuccess={isRequestSuccess(state.myCounterpartiesList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.myCounterpartiesList)}
      myCounterpartiesSelectOption={myCounterpartiesSelectOption}
      myCounterpartiesListData={myCounterpartiesListData}
    />
  );
}
export const myCounterpartiesSelectOption = [
  { id: 0, tid: 'MY_COUNTERPARTIES_LIST.SELECT_OPTION.BY_REQUEST_TIME' },
  { id: 1, tid: 'MY_COUNTERPARTIES_LIST.SELECT_OPTION.BY_REQUEST_TIME' },
  { id: 2, tid: 'MY_COUNTERPARTIES_LIST.SELECT_OPTION.BY_REQUEST_TIME' },
];

const myCounterpartiesListData = [
  {
    approved: true,
    company: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    userCompany: 'ООО "FLYONE DESIGN"',
    turnover: '56 652.40',
    addCharges: '15',
    risks: '5%',
    userRating: 4,
    generalRating: 3,
  },
  {
    approved: false,
    company: 'ООО "ТЕХЭЛЕКТРО МСК"',
    userCompany: 'ООО "FLYONE DESIGN"',
    turnover: '1 250.40',
    addCharges: '0',
    risks: null,
    userRating: 0,
    generalRating: 5,
  },
];
