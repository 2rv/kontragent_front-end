import { useReducer, useEffect } from 'react';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { initialState, FooterReducer } from './footer.reducer';
import { getAnalyticsAction } from './footer.action';
import { FooterComponent } from './footer.component';

export function FooterContainer() {
  const [state, setState] = useReducer(FooterReducer, initialState);

  useEffect(() => {
    getAnalyticsAction()(setState);
  }, []);

  return (
    <FooterComponent
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
      data={getRequestData(state.request)}
    />
  );
}
