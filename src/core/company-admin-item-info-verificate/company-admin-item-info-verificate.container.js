import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';

import { performCompanyAdminItemInfoVerificateData } from './company-admin-item-info-verificate.convert';

import { CompanyAdminItemInfoVerificateComponent } from './company-admin-item-info-verificate.component';

import {
  COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE,
  COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME,
} from './company-admin-item-info-verificate.constant';

import {
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function CompanyAccountItemInfoVerificateContainer() {
  const dispatch = useDispatch();
  const { pageLoading, state } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    state: state[COMPANY_ADMIN_ITEM_INFO_VERIFICATE_STORE_NAME],
  }));

  React.useEffect(() => {
    companyAdminItemInfoVerificationGetStatus();
  }, []);

  const companyAdminItemInfoVerificationVerificate = async (dispatch) => {
    dispatch({
      type: COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.VERIFICATE_PENDING,
    });

    try {
      await httpRequest({
        method: 'PATCH',
        url: `company/admin/verificateInfo/${getQuery('companyId')}`,
      });

      dispatch({
        type: COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.VERIFICATE_SUCCESS,
      });
    } catch (error) {
      if (error) {
        dispatch({
          type: COMPANY_ADMIN_ITEM_INFO_VERIFICATE_ACTION_TYPE.VERIFICATE_ERROR,
          errorMessage: error.response.data.message,
        });
      }
    }
  };

  const companyAdminItemInfoVerificationGetStatus = async () => {
    setGetRevisionStatusPending(true);
    setGetRevisionStatusSuccess(false);
    setGetRevisionStatusError(false);
    setGetRevisionStatusErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `/company/${getQuery('companyId')}/`,
      });

      const status = performCompanyAdminItemInfoVerificateData(res.data);

      setCompanyVerified(status);
      setGetRevisionStatusPending(false);
      setGetRevisionStatusSuccess(true);
    } catch (error) {
      if (error) {
        setGetRevisionStatusError(true);
        setGetRevisionStatusPending(false);
        setGetRevisionStatusErrorMessage(error.response.data.message);
      }
    }
  };

  const verifyButtonAction = () => {
    dispatch(companyAdminItemInfoVerificationVerificate);
  };

  const [companyVerified, setCompanyVerified] = React.useState(true);

  const [isGetRevisionStatusPending, setGetRevisionStatusPending] =
    React.useState(null);
  const [isGetRevisionStatusError, setGetRevisionStatusError] =
    React.useState(null);
  const [isGetRevisionStatusSuccess, setGetRevisionStatusSuccess] =
    React.useState(null);
  const [getGetRevisionStatusErrorMessage, setGetRevisionStatusErrorMessage] =
    React.useState(null);

  return (
    <CompanyAdminItemInfoVerificateComponent
      companyVerified={companyVerified}
      verifyButtonAction={verifyButtonAction}
      isVerifyCompanyPending={isRequestPending(state.verificateCompanyInfo)}
      isVerifyCompanyError={isRequestError(state.verificateCompanyInfo)}
      isVerifyCompanySuccess={isRequestSuccess(state.verificateCompanyInfo)}
      pageLoading={pageLoading}
    />
  );
}
