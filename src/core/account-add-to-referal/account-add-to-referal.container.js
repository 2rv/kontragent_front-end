import React from 'react';
import { AccountAddToReferalComponent } from './account-add-to-referal.component';
import { getQuery } from '../../main/navigation';
import { uploadAccountReferalId } from './account-add-to-referal.action';
import { useSelector, useDispatch } from 'react-redux';
import { ACCOUNT_ADD_TO_REFERAL_STORE_NAME } from './account-add-to-referal.constant';
import { ACCOUNT_ADD_TO_REFERAL_DATA_NAME } from './account-add-to-referal.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestSuccess,
  isRequestPending,
} from '../../main/store/store.service';

export function AccountAddToReferalContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[ACCOUNT_ADD_TO_REFERAL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));
  const dispatch = useDispatch();

  const handleClickAccept = () => {
    dispatch(uploadAccountReferalId(getQuery('referalId')));
  };

  return (
    <AccountAddToReferalComponent
      handleClickAccept={handleClickAccept}
      isPending={isRequestPending(state.addToReferalInfo)}
      isSuccess={isRequestSuccess(state.addToReferalInfo)}
      isError={isRequestError(state.addToReferalInfo)}
      errorMessage={getRequestErrorMessage(state.addToReferalInfo)}
      pageLoading={pageLoading}
    />
  );
}
