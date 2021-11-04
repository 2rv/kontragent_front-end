import React from 'react';
import { AdminRevisionReviewComonent } from './admin-revision-review.component';
import { adminRevisionReviewValidation } from './admin-revision-review.validation';
import { useSelector } from 'react-redux';
import { ADMIN_REVISION_REVIEW_DATA_NAME } from './admin-revision-review.constant';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { getQuery, redirect } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../revision-admin-list';
import { convertAdminRevisionReviewSendData } from './admin-revision-review.convert';

export function AdminRevisionReviewContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const createReferalSendData = (values) => {
    const data = convertAdminRevisionReviewSendData(values, getFileList);
    loginFormSendData(data);
  };

  const loginFormSendData = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    data.fileIdList = getFileList;

    try {
      const res = await httpRequest({
        method: 'PATCH',
        url: `/revision/company/${getQuery('companyId')}/revision/${getQuery(
          'revisionId',
        )}/review`,
        data,
      });

      await redirect(REVISION_ADMIN_LIST_ROUTE_PATH);
      setRequestPending(false);
      setRequestSuccess(true);
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]: '',
      [ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]: '',
      [ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]: '',
      [ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST]: [],
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  const [getFileList, setFileList] = React.useState([]);

  return (
    <AdminRevisionReviewComonent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      validation={adminRevisionReviewValidation}
      onSubmitForm={createReferalSendData}
      pageLoading={pageLoading}
      setFileList={setFileList}
      errorMessage={getRequestErrorMessage}
    />
  );
}
