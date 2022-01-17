import React from 'react';

import { useDispatch } from 'react-redux';

import { CompanyAccountItemSelfRevisionCreatePeriodListComponent } from './company-account-item-self-revision-create-period-list.component';

import { companyAccountItemSelfRevisionCreateAddYear } from '../company-account-item-self-revision-create';

export function CompanyAccountItemSelfRevisionCreatePeriodListContainer({
  companyId,
  company,
  ...formikProps
}) {
  const dispatch = useDispatch();
  const addPeriod = () => {
    dispatch(companyAccountItemSelfRevisionCreateAddYear(companyId));
  };

  return (
    <CompanyAccountItemSelfRevisionCreatePeriodListComponent
      companyId={companyId}
      periods={company.year}
      addPeriod={addPeriod}
      {...formikProps}
    />
  );
}
