import { useReducer } from 'react';
import { getQuery } from '../../main/navigation/navigation.core';
import {
  isRequestPending,
  isRequestError,
  isRequestSuccess,
  getRequestErrorMessage,
} from '../../main/store/store.service';

import {
  initialState,
  companyAccountItemKontragentItemDeleteReducer,
} from './company-account-item-kontragent-item-delete.reducer';
import { deleteCompanyAccountItemKontragentItem } from './company-account-item-kontragent-item-delete.action';
import { CompanyAccountItemKontragentItemDeleteComponent } from './company-account-item-kontragent-item-delete.component';

export function CompanyAccountItemKontragentItemDeleteContainer() {
  const [state, setState] = useReducer(
    companyAccountItemKontragentItemDeleteReducer,
    initialState,
  );

  const onRemoveKontragent = () => {
    const data = {
      companyId: getQuery('companyId'),
      kontragentId: getQuery('kontragentId'),
    };

    deleteCompanyAccountItemKontragentItem(data)(setState);
  };

  return (
    <CompanyAccountItemKontragentItemDeleteComponent
      isPending={isRequestPending(state.request)}
      isError={isRequestError(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      onRemove={onRemoveKontragent}
    />
  );
}
