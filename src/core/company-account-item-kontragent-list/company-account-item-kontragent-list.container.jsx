import { useContext, useEffect, useReducer } from 'react';
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
  companyAccountItemKontragentListReducer,
} from './company-account-item-kontragent-list.reducer';
import {
  getCompanyAccountItemKontragentList,
  reloadCompanyAccountItemKontragentList,
} from './company-account-item-kontragent-list.action';
import { CompanyAccountItemKontragentListComponent } from './company-account-item-kontragent-list.component';
import { CompanyAccountItemKontragentContext } from '../company-account-item-kontragent/company-account-item-kontragent.page';

export function CompanyAccountItemKontragentListContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const [state, setState] = useReducer(
    companyAccountItemKontragentListReducer,
    initialState,
  );
  const { setValue } = useContext(CompanyAccountItemKontragentContext);

  useEffect(() => {
    const companyId = getQuery('companyId');
    getCompanyAccountItemKontragentList(companyId)(setState);
    setValue({
      reloadList: () =>
        reloadCompanyAccountItemKontragentList(companyId)(setState),
    });
  }, []);

  return (
    <CompanyAccountItemKontragentListComponent
      pageLoading={pageLoading}
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      data={getRequestData(state.request)}
    />
  );
}
