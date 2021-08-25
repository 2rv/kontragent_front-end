import { useEffect } from 'react';
import { myLegalEntitiesListLoad } from './my-legal-entities-list.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { MY_LEGAL_ENTITIES_LIST_STORE_NAME } from './my-legal-entities-list.constant';
import { MyLegalEntitiesListComponent } from './my-legal-entities-list.component';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyLegalEntitiesListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_LEGAL_ENTITIES_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(myLegalEntitiesListLoad());
  //   }, []);

  return (
    <MyLegalEntitiesListComponent
      isPending={isRequestPending(state.myLegalEntitiesList)}
      isError={isRequestError(state.myLegalEntitiesList)}
      isSuccess={isRequestSuccess(state.myLegalEntitiesList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.myLegalEntitiesList)}
      myLegalEntitiesListData={myLegalEntitiesListData}
      myLegalEntitiesSelectOption={myLegalEntitiesSelectOption}
    />
  );
}
export const myLegalEntitiesSelectOption = [
  { id: 0, tid: '1' },
  { id: 1, tid: '2' },
  { id: 2, tid: '3' },
];
const myLegalEntitiesListData = [
  {
    companyName: 'ООО "ПЕРЕИСПОДВЫПОДВЕРТАМАКСИМАЛЬНО"',
    books: '15',
    kontragent: 25,
    turnover: '56 652.40',
    addCharges: '15',
    risks: '5%',
    generalRating: '3',
    penalties: 0,
    fines: 1500,
    finesNumber: 2,
  },
  {
    companyName: 'ООО "FLYONEDESIGN"',
    books: '0',
    kontragent: 5,
    turnover: '15 150.20',
    addCharges: '0',
    risks: null,
    generalRating: '2,5',
    penalties: 25,
    fines: 2500,
    finesNumber: 1,
  },
];
