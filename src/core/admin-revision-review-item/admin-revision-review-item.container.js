import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { performAdminRevisionReviewItemData } from './admin-revision-review-item.convert';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { AdminRevisionReviewItemComponent } from './admin-revision-review-item.component';
import { httpRequest } from '../../main/http';
import { getQuery } from '../../main/navigation/navigation.core';
import {
  ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE,
  ADMIN_REVISION_REVIEW_ITEM_STORE_NAME,
} from './admin-revision-review-item.constant';

export function AdminRevisionReviewItemContainer() {
  const { pageLoading, data, requestStatus } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
    data: state[ADMIN_REVISION_REVIEW_ITEM_STORE_NAME].data,
    requestStatus: state[ADMIN_REVISION_REVIEW_ITEM_STORE_NAME].requestStatus,
  }));
  const dispatch = useDispatch();

  React.useEffect(() => {
    getAdminRevisionReviewItemInfo();
    return () => {
      dispatch({
        type: ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_CLEANUP,
      });
    };
  }, []);

  const getAdminRevisionReviewItemInfo = async () => {
    dispatch({ type: ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_PENDING });

    try {
      const res = await httpRequest({
        method: 'GET',
        url: `revision/admin/revision/${getQuery('revisionId')}/review`,
      });

      const data = performAdminRevisionReviewItemData(res.data);

      dispatch({
        type: ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      if (error.response) {
        dispatch({
          type: ADMIN_REVISION_REVIEW_ITEM_ACTION_TYPE.REQUEST_ERROR,
          payload: error.response.data.message,
        });
      }
    }
  };

  return (
    <AdminRevisionReviewItemComponent
      isPending={
        requestStatus.pending || (!requestStatus.success && pageLoading)
      }
      isError={requestStatus.error}
      isSuccess={requestStatus.success}
      data={data}
      pageLoading={pageLoading}
      errorMessage={requestStatus.errorMessage}
    />
  );
}
