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
  adminRevisionSelfReviewCreateReducer,
} from './admin-revision-self-review-create.reducer';

import { ADMIN_REVISION_SELF_ITEM_DATA_NAME as FIELD_NAME } from '../admin-revision-self-item/admin-revision-self-item.constant';

import { uploadAdminRevisionSelfReviewCreateFormData } from './admin-revision-self-review-create.action';
import { convertAdminRevisionSelfReviewCreateFormData } from './admin-revision-self-review-create.convert';
import { AdminRevisionSelfReviewCreateComponent } from './admin-revision-self-review-create.component';
import { getQuery } from '../../main/navigation/navigation.core';
import { REVISION_STATUS } from './admin-revision-self-review-create.constant';

export function AdminRevisionSelfReviewCreateContainer(props) {
  const { data } = props;

  const [state, setState] = useReducer(
    adminRevisionSelfReviewCreateReducer,
    initialState,
  );

  const onSubmitForm = (values) => {
    const data = convertAdminRevisionSelfReviewCreateFormData(values);
    data.revisionId = getQuery('revisionId');
    uploadAdminRevisionSelfReviewCreateFormData(data)(setState);
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
    <AdminRevisionSelfReviewCreateComponent
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      onSubmitForm={onSubmitForm}
      data={data}
    />
  );
}
