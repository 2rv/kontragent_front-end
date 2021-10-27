import React from 'react';

import { CompanyAccountItemMemberListComponent } from './company-account-item-member-list.component';

import { useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';

import { performCompanyAccountItemMemberListData } from './company-account-item-member-list.convert';
import { COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME } from '../company-account-item-member-delete/company-account-item-member-delete.constant'

export function CompanyAccountItemMemberListContainer() {
  const { pageLoading, deleteState } = useSelector((state) => ({
    deleteState: state[COMPANY_ACCOUNT_ITEM_MEMBER_DELETE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  React.useEffect(() => {
    getCompanyAccountItemPaymentList();
  }, []);

  React.useEffect(() => {
    deleteState.deletedItemIndex && setData(getData.splice(deleteState.deletedItemIndex, 1))
  }, [deleteState.form.success]);

  const getCompanyAccountItemPaymentList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/company-member/company/${getQuery('companyId')}/member/list`,
      });

      const data = performCompanyAccountItemMemberListData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <CompanyAccountItemMemberListComponent
      isPending={isRequestPending || (!isRequestSuccess && pageLoading)}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
