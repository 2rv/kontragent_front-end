import React from 'react';

import { useDispatch } from 'react-redux';

import { CompanyAccountItemRevisionCreatePeriodListComponent } from './company-account-item-revision-create-period-list.component';

import { companyAccountItemRevisionCreateAddYear } from '../company-account-item-revision-create';

export function CompanyAccountItemRevisionCreatePeriodListContainer({
  companyId,
  company,
  ...formikProps
}) {
  const dispatch = useDispatch();
  const addPeriod = () => {
    dispatch(companyAccountItemRevisionCreateAddYear(companyId));
  };

  return (
    <CompanyAccountItemRevisionCreatePeriodListComponent
      companyId={companyId}
      periods={company.year}
      addPeriod={addPeriod}
      {...formikProps}
    />
  );
}
