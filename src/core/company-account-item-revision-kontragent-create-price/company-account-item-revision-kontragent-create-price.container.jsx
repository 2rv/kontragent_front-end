import { useReducer, useEffect } from 'react';
import {
  isRequestPending,
  isRequestSuccess,
  isRequestError,
  getRequestErrorMessage,
  getRequestData,
} from '../../main/store/store.service';
import { getQuery } from '../../main/navigation/navigation.core';

import {
  initialState,
  companyAccountItemRevisionKontragentCreatePriceReducer,
} from './company-account-item-revision-kontragent-create-price.reducer';
import { getCompanyAccountItemRevisionKontragentCreatePriceAction } from './company-account-item-revision-kontragent-create-price.action';
import { CompanyAccountItemRevisionKontragentCreatePriceComponent } from './company-account-item-revision-kontragent-create-price.component';
import { getCompanyAccountItemRevisionKontragentPrice } from './company-account-item-revision-kontragent-create-price.convert';

export function CompanyAccountItemRevisionKontragentCreatePriceContainer(
  props,
) {
  const { kontragents, handleChange, handleBlur, value } = props;
  const [state, setState] = useReducer(
    companyAccountItemRevisionKontragentCreatePriceReducer,
    initialState,
  );

  useEffect(() => {
    const data = { companyId: getQuery('companyId') };
    getCompanyAccountItemRevisionKontragentCreatePriceAction(data)(setState);
  }, []);

  return (
    <CompanyAccountItemRevisionKontragentCreatePriceComponent
      totalPrice={getCompanyAccountItemRevisionKontragentPrice(kontragents)}
      handleChange={handleChange}
      handleBlur={handleBlur}
      value={value}
      isPending={isRequestPending(state.request)}
      isSuccess={isRequestSuccess(state.request)}
      data={getRequestData(state.request)}
      isError={isRequestError(state.request)}
      errorMessage={getRequestErrorMessage(state.request)}
    />
  );
}
