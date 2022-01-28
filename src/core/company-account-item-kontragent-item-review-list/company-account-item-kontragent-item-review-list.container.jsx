import { useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  initialState,
  companyAccountItemKontragentItemReviewListReducer,
} from './company-account-item-kontragent-item-review-list.reducer';
import { getCompanyAccountItemKontragentItemReviewList } from './company-account-item-kontragent-item-review-list.action';
import { CompanyAccountItemKontragentItemReviewListComponent } from './company-account-item-kontragent-item-review-list.component';

export function CompanyAccountItemKontragentItemReviewListContainer() {
  const [state, setState] = useReducer(
    companyAccountItemKontragentItemReviewListReducer,
    initialState,
  );
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  useEffect(() => {
    const companyId = getQuery('companyId');
    getCompanyAccountItemKontragentItemReviewList(setState, companyId);
  }, []);

  return (
    <CompanyAccountItemKontragentItemReviewListComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      data={getRequestData(state.request)}
    />
  );
}
