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
  CompanyAdminUnregisteredListReducer,
} from './company-admin-unregistered-list.reducer';
import { getCompanyAdminUnregisteredListAction } from './company-admin-unregistered-list.action';
import { CompanyAdminUnregisteredListComponent } from './company-admin-unregistered-list.component';

export function CompanyAdminUnregisteredListContainer() {
  const [state, setState] = useReducer(
    CompanyAdminUnregisteredListReducer,
    initialState,
  );
  const { list, ...filterData } = getRequestData(state.request);

  useEffect(() => {
    getCompanyAdminUnregisteredListAction({})(setState);
  }, []);

  const onChangeFilter = (filter) => {
    getCompanyAdminUnregisteredListAction({ ...filter })(setState);
  };

  return (
    <CompanyAdminUnregisteredListComponent
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
