import { useReducer, useEffect } from 'react';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import {
  initialState,
  CompanyAdminListReducer,
} from './company-admin-list.reducer';
import { getCompanyAdminListAction } from './company-admin-list.action';
import { CompanyAdminListComponent } from './company-admin-list.component';

export function CompanyAdminListContainer() {
  const [state, setState] = useReducer(CompanyAdminListReducer, initialState);
  const { list, ...filterData } = getRequestData(state.request);

  useEffect(() => {
    getCompanyAdminListAction({})(setState);
  }, []);

  const onChangeFilter = (filter) => {
    getCompanyAdminListAction({ ...filter })(setState);
  };

  return (
    <CompanyAdminListComponent
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      list={list}
      onChangeFilter={onChangeFilter}
      filterData={filterData}
    />
  );
}
