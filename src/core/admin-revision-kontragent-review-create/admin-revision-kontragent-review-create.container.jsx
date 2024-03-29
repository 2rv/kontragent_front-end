import { useReducer } from 'react';
import {
  getRequestData,
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import {
  initialState,
  adminRevisionKontragentReviewCreateReducer,
} from './admin-revision-kontragent-review-create.reducer';

import { ADMIN_REVISION_KONTRAGENT_ITEM_DATA_NAME as FIELD_NAME } from '../admin-revision-kontragent-item/admin-revision-kontragent-item.constant';

import { uploadAdminRevisionKontragentReviewCreateFormData } from './admin-revision-kontragent-review-create.action';
import { convertAdminRevisionKontragentReviewCreateFormData } from './admin-revision-kontragent-review-create.convert';
import { AdminRevisionKontragentReviewCreateComponent } from './admin-revision-kontragent-review-create.component';
import { getQuery } from '../../main/navigation/navigation.core';
import { REVISION_STATUS } from './admin-revision-kontragent-review-create.constant';

export function AdminRevisionKontragentReviewCreateContainer(props) {
  const { data } = props;

  const [state, setState] = useReducer(
    adminRevisionKontragentReviewCreateReducer,
    initialState,
  );

  const onSubmitForm = (values) => {
    const data = convertAdminRevisionKontragentReviewCreateFormData(values);
    data.revisionId = getQuery('revisionId');
    uploadAdminRevisionKontragentReviewCreateFormData(data)(setState);
  };

  const getInitialValue = () => {
    return {
      [FIELD_NAME.REVIEW]: data[FIELD_NAME.REVIEW] || '',
      [FIELD_NAME.FILES_REVIEW]: [],
      [FIELD_NAME.STATUS]: data[FIELD_NAME.STATUS] || REVISION_STATUS.NEW,
      [FIELD_NAME.PRICE]: data[FIELD_NAME.PRICE] || 0,
    };
  };

  return (
    <AdminRevisionKontragentReviewCreateComponent
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      onSubmitForm={onSubmitForm}
    />
  );
}
