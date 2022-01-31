import { useEffect, useReducer } from 'react';
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
  CompanyAccountItemRevisionKontragentCreateKontragentListReducer,
} from './company-account-item-revision-kontragent-create-kontragent-list.reducer';
import { getCompanyAccountItemRevisionKontragentCreateKontragentList } from './company-account-item-revision-kontragent-create-kontragent-list.action';
import { CompanyAccountItemRevisionKontragentCreateKontragentListComponent } from './company-account-item-revision-kontragent-create-kontragent-list.component';

export function CompanyAccountItemRevisionKontragentCreateKontragentListContainer(
  props,
) {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [state, setState] = useReducer(
    CompanyAccountItemRevisionKontragentCreateKontragentListReducer,
    initialState,
  );

  useEffect(() => {
    const companyId = getQuery('companyId');
    getCompanyAccountItemRevisionKontragentCreateKontragentList(companyId)(
      setState,
    );
  }, []);

  return (
    <CompanyAccountItemRevisionKontragentCreateKontragentListComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      data={getRequestData(state.request)}
      {...props}
    />
  );
}
