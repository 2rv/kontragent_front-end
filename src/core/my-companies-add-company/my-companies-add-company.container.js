import React from 'react';

import { MyCompaniesAddCompanyComponent } from './my-companies-add-company.component';

import { useDispatch, useSelector } from 'react-redux';

import { addCompanyFormValidation } from './my-companies-add-company.validation';

import {
  ADD_COMPANY_FORM_FIELD_NAME,
  MY_COMPANIES_ADD_COMPANY_FIELD_NAME,
} from './my-companies-add-company.type';

import { convertAddCompanyFormData } from './my-companies-add-company.convert';

import { addCompanyFormUploadData } from './my-companies-add-company.action';

import { MY_COMPANIES_ADD_COMPANY_STORE_NAME } from './my-companies-add-company.constant';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function MyCompaniesAddCompanyContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[MY_COMPANIES_ADD_COMPANY_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  const addCompanyFormSendData = (values) => {
    const data = convertAddCompanyFormData(values);
    dispatch(addCompanyFormUploadData(data));
  };

  const getInitialValue = () => {
    return {
      [MY_COMPANIES_ADD_COMPANY_FIELD_NAME.NAME]: '',
      [MY_COMPANIES_ADD_COMPANY_FIELD_NAME.INN]: '',
    };
  };

  return (
    <MyCompaniesAddCompanyComponent
      isPending={isRequestPending(state.addCompanyForm)}
      isError={isRequestError(state.addCompanyForm)}
      isSuccess={isRequestSuccess(state.addCompanyForm)}
      initialValue={getInitialValue()}
      validation={addCompanyFormValidation}
      onSubmitForm={addCompanyFormSendData}
      fieldName={ADD_COMPANY_FORM_FIELD_NAME}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.addCompanyForm)}
    />
  );
}
