import React from 'react';

import { useDispatch } from 'react-redux';

import { CompanyAccountItemRevisionCreateCompanyListComponent } from './company-account-item-revision-create-company-list.component';

import { companyAccountItemRevisionCreateAddCompany } from '../company-account-item-revision-create';

export function CompanyAccountItemRevisionCreateCompanyListContainer({
  companies,
}) {
  const dispatch = useDispatch();
  const addCompany = () => {
    dispatch(companyAccountItemRevisionCreateAddCompany());
  };

  return (
    <CompanyAccountItemRevisionCreateCompanyListComponent
      companies={companies}
      addCompany={addCompany}
    />
  );
}
