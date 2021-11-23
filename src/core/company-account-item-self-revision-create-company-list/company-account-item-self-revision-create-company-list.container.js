import React from 'react';

import { useDispatch } from 'react-redux';

import { CompanyAccountItemSelfRevisionCreateCompanyListComponent } from './company-account-item-self-revision-create-company-list.component';

import { companyAccountItemSelfRevisionCreateAddCompany } from '../company-account-item-self-revision-create';

export function CompanyAccountItemSelfRevisionCreateCompanyListContainer({
  companies,
}) {
  const dispatch = useDispatch();
  const addCompany = () => {
    dispatch(companyAccountItemSelfRevisionCreateAddCompany());
  };

  return (
    <CompanyAccountItemSelfRevisionCreateCompanyListComponent
      companies={companies}
      addCompany={addCompany}
    />
  );
}
