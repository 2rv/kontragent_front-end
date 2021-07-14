import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MyCompaniesReviewCompanyListComponent } from './my-companies-review-company-list.component';
import { myCompaniesLoadCompaniesData } from './my-companies-review-company-list.action';
import { MY_COMPANIES_REVIEW_COMPANY_LIST_STORE_NAME } from './my-companies-review-company-list.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

export function MyCompaniesReviewCompanyListContainer() {
  const dispatch = useDispatch();
  //   const { reviewCompanyList, pageLoading, settingsChangeEmailState } =
  //     useSelector((state) => ({
  //       reviewCompanyList:
  //         state[MY_COMPANIES_REVIEW_COMPANY_LIST_STORE_NAME].reviewCompanyList,
  //       pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  //     }));
  //   useEffect(() => {
  //     dispatch(myCompaniesLoadCompaniesData());
  //   }, []);

  return <MyCompaniesReviewCompanyListComponent />;
}
