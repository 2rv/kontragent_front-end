import React from 'react';
import { useSelector } from 'react-redux';

import { getQuery, redirect } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';

import { ADMIN_REVISION_REVIEW_DATA_NAME } from './admin-revision-review.constant';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../revision-admin-list';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';

import { AdminRevisionReviewComponent } from './admin-revision-review.component';
import { convertAdminRevisionReviewSendData } from './admin-revision-review.convert';

import { ADMIN_REVISION_REVIEW_ITEM_STORE_NAME } from '../admin-revision-review-item';

export function AdminRevisionReviewContainer() {
  const { pageLoading, prevData } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    prevData: state[ADMIN_REVISION_REVIEW_ITEM_STORE_NAME].data,
  }));

  const createRevisionReview = (values, setSubmitting) => {
    const data = convertAdminRevisionReviewSendData(values, getFileList);
    sendData(data, setSubmitting);
  };

  const sendData = async (data, setSubmitting) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const res = await httpRequest({
        method: 'PATCH',
        url: `revision/review/${getQuery('revisionId')}`,
        data,
      });

      await redirect(REVISION_ADMIN_LIST_ROUTE_PATH);
      setRequestPending(false);
      setRequestSuccess(true);
      setSubmitting(false);
    } catch (error) {
      if (error) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
        setSubmitting(false);
      }
    }
  };

  const getInitialValue = () => {
    return {
      [ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]: prevData?.review,
      [ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]: prevData?.status,
      [ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]: prevData?.additionPrice,
      [ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST]: prevData?.fileReview,
    };
  };
  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  const [getFileList, setFileList] = React.useState(
    prevData?.fileReview?.map((i) => i.id),
  );

  console.log(getFileList);
  return (
    <AdminRevisionReviewComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      onSubmitForm={createRevisionReview}
      pageLoading={pageLoading}
      setFileList={setFileList}
      errorMessage={getRequestErrorMessage}
    />
  );
}
