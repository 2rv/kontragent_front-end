import React from 'react';

import { useDispatch } from 'react-redux';

import { CompanyAccountItemSelfRevisionCreateCompanyItemComponent } from './company-account-item-self-revision-create-company-item.component';

import { companyAccountItemSelfRevisionCreateRemoveCompany } from '../company-account-item-self-revision-create';

export function CompanyAccountItemSelfRevisionCreateCompanyItemContainer({
  companyId,
  company,
  last,
}) {
  const dispatch = useDispatch();
  const removeCompany = () => {
    dispatch(companyAccountItemSelfRevisionCreateRemoveCompany(companyId));
  };

  return (
    <CompanyAccountItemSelfRevisionCreateCompanyItemComponent
      companyId={companyId}
      company={company}
      last={last}
      removeCompany={removeCompany}
    />
  );
}
