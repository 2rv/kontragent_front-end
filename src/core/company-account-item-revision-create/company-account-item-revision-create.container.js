import React from 'react';

import { useSelector } from 'react-redux';

import { CompanyAccountItemRevisionCreateComponent } from './company-account-item-revision-create.component';

import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_STORE_NAME } from '../company-account-item-revision-create';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

export function CompanyAccountItemRevisionCreateContainer() {
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COMPANY_ACCOUNT_ITEM_REVISION_CREATE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  return (
    <CompanyAccountItemRevisionCreateComponent
      state={state}
      pageLoading={pageLoading}
    />
  );
}
