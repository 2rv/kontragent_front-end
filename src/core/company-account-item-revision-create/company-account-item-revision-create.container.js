import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { CompanyAccountItemRevisionCreateComponent } from './company-account-item-revision-create.component';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_STORE_NAME } from '../company-account-item-revision-create';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { cleanupStore } from './company-account-item-revision-create.action';

export function CompanyAccountItemRevisionCreateContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_REVISION_CREATE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  return (
    <CompanyAccountItemRevisionCreateComponent
      state={state}
      pageLoading={pageLoading}
    />
  );
}
