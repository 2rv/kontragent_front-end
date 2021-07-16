import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyCompaniesReviewCompanyListComponent } from './my-companies-review-company-list.component';
import { myCompaniesLoadCompaniesData } from './my-companies-review-company-list.action';
import { MY_COMPANIES_REVIEW_COMPANY_LIST_STORE_NAME } from './my-companies-review-company-list.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
export function MyCompaniesReviewCompanyListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_COMPANIES_REVIEW_COMPANY_LIST_STORE_NAME].reviewCompanyList,
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  // useEffect(() => {
  //   dispatch(myCompaniesLoadCompaniesData());
  // }, []);

  return (
    <MyCompaniesReviewCompanyListComponent
      isPending={isRequestPending(state.feedAndNotificationsListData)}
      isError={isRequestError(state.feedAndNotificationsListData)}
      isSuccess={isRequestSuccess(state.feedAndNotificationsListData)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.feedAndNotificationsListData)}
      myCompaniesSelectOption={myCompaniesSelectOption}
      myCompaniesListData={myCompaniesListData}
    />
  );
}
const myCompaniesSelectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const myCompaniesListData = [
  {
    companyName: `ООО "КАПСТРОЙЭНЕРГОТЕХ"`,
    role: 'Менеджер',
    date: 'с 06.08.2020',
  },
  {
    companyName: `ООО "КАПСТРОЙЭНЕРГОТЕХ"`,
    role: 'Менеджер',
    date: 'с 06.08.2020',
  },
  {
    companyName: `ООО "КАПСТРОЙЭНЕРГОТЕХ"`,
    role: 'Менеджер',
    date: 'с 06.08.2020',
  },
];
