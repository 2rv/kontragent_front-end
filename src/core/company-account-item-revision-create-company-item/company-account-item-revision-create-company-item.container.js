import React from 'react';

import { useDispatch } from 'react-redux';

import { CompanyAccountItemRevisionCreateCompanyItemComponent } from './company-account-item-revision-create-company-item.component';

import { companyAccountItemRevisionCreateRemoveCompany } from '../company-account-item-revision-create';

export function CompanyAccountItemRevisionCreateCompanyItemContainer({
  companyId,
  company,
  last,
}) {
  const dispatch = useDispatch();
  const removeCompany = () => {
    dispatch(companyAccountItemRevisionCreateRemoveCompany(companyId));
  };

  return (
    <CompanyAccountItemRevisionCreateCompanyItemComponent
      companyId={companyId}
      company={company}
      last={last}
      removeCompany={removeCompany}
    />
  );
}
