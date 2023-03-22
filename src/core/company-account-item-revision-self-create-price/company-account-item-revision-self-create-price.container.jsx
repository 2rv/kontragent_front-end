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
  companyAccountItemRevisionSelfCreatePriceReducer,
} from './company-account-item-revision-self-create-price.reducer';
import { getCompanyAccountItemRevisionSelfCreatePriceAction } from './company-account-item-revision-self-create-price.action';
import { getCompanyAccountItemRevisionSelfCreatePrice } from './company-account-item-revision-self-create-price.convert';
import { CompanyAccountItemRevisionSelfCreatePriceComponent } from './company-account-item-revision-self-create-price.component';

export function CompanyAccountItemRevisionSelfCreatePriceContainer(props) {
  const { years, handleChange, handleBlur, value } = props;
  const [state, setState] = useReducer(
    companyAccountItemRevisionSelfCreatePriceReducer,
    initialState,
  );

  useEffect(() => {
    const data = { companyId: getQuery('companyId') };
    getCompanyAccountItemRevisionSelfCreatePriceAction(data)(setState);
  }, []);

  return (
    <CompanyAccountItemRevisionSelfCreatePriceComponent
      totalPrice={getCompanyAccountItemRevisionSelfCreatePrice(years)}
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
