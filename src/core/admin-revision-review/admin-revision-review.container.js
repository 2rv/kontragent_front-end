import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getQuery, redirect } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';
import {
  resetAdminRevisionReviewUpdateDataFromState,
  changeAdminRevisionReview,
} from './admin-revision-review.action';
import {
  ADMIN_REVISION_REVIEW_DATA_NAME,
  ADMIN_REVISION_REVIEW_STORE_NAME,
} from './admin-revision-review.constant';
import { REVISION_ADMIN_LIST_ROUTE_PATH } from '../revision-admin-list';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { ADMIN_REVISION_INFO_STORE_NAME } from '../admin-revision-info/admin-revision-info.constant';
import { AdminRevisionReviewComponent } from './admin-revision-review.component';
import { convertAdminRevisionReviewSendData } from './admin-revision-review.convert';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function AdminRevisionReviewContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading, userData } = useSelector((state) => ({
    state: state[ADMIN_REVISION_REVIEW_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    userData: state[ADMIN_REVISION_INFO_STORE_NAME],
  }));

  React.useEffect(() => {
    dispatch(resetAdminRevisionReviewUpdateDataFromState());
  }, []);

  const createRevisionReview = (values) => {
    const data = convertAdminRevisionReviewSendData(values, getFileList);
    dispatch(changeAdminRevisionReview(data));
  };

  const getInitialValue = () => {
    if (isRequestSuccess(userData.user)) {
      const data = getRequestData(userData.user, '');

      return {
        [ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]:
          data[ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW],
        [ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]:
          data[ADMIN_REVISION_REVIEW_DATA_NAME.STATUS],
        [ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]:
          data[ADMIN_REVISION_REVIEW_DATA_NAME.PRICE],
        [ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST]:
          data[ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST],
      };
    }
    return {
      [ADMIN_REVISION_REVIEW_DATA_NAME.REVIEW]: '',
      [ADMIN_REVISION_REVIEW_DATA_NAME.STATUS]: '',
      [ADMIN_REVISION_REVIEW_DATA_NAME.PRICE]: '',
      [ADMIN_REVISION_REVIEW_DATA_NAME.FILE_ID_LIST]: [],
    };
  };

  const [getFileList, setFileList] = React.useState([]);

  return (
    <AdminRevisionReviewComponent
      isPending={isRequestPending(state.form)}
      isError={isRequestError(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      initialValue={getInitialValue()}
      onSubmitForm={createRevisionReview}
      isDependentPending={isRequestPending(userData.user)}
      pageLoading={pageLoading}
      setFileList={setFileList}
      errorMessage={getRequestErrorMessage}
    />
  );
}
