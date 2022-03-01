import { useEffect, useReducer } from 'react';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestErrorMessage,
  getRequestData,
} from '../../main/store/store.service';

import { getUserReferalPaymentListAction } from './user-referal-payment-list.action';
import { UserReferalPaymentComponent } from './user-referal-payment-list.component';
import {
  initialState,
  userReferalPaymentListReducer,
} from './user-referal-payment-list.reducer';

export function UserReferalPaymentListContainer() {
  const [state, setState] = useReducer(
    userReferalPaymentListReducer,
    initialState,
  );

  useEffect(() => {
    getUserReferalPaymentListAction()(setState);
  }, []);

  return (
    <UserReferalPaymentComponent
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      data={getRequestData(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
    />
  );
}
