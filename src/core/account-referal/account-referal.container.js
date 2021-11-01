import React from 'react';
import { AccountReferalComponent } from './account-referal.component';
import { getQuery } from '../../main/navigation';
import { uploadAccountReferalId } from './account-referal.action';
import { useSelector, useDispatch } from 'react-redux';
import { ACCOUNT_REFERAL_STORE_NAME } from './account-referal.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestSuccess,
  isRequestPending,
} from '../../main/store/store.service';

export function AccountReferalContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ACCOUNT_REFERAL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));
  const dispatch = useDispatch();

  const handleClickAccept = () => {
    dispatch(uploadAccountReferalId(getQuery('referalId')));
  };

  return (
    <AccountReferalComponent
      handleClickAccept={handleClickAccept}
      isPending={isRequestPending(state.accountReferalInfo)}
      isSuccess={isRequestSuccess(state.accountReferalInfo)}
      isError={isRequestError(state.accountReferalInfo)}
      errorMessage={getRequestErrorMessage(state.accountReferalInfo)}
      pageLoading={pageLoading}
    />
  );
}
