import { useReducer, useState } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import {
  initialState,
  adminRevisionKontragentReviewShareReducer,
} from './admin-revision-kontragent-review-share.reducer';

import { ADMIN_REVISION_KONTRAGENT_REVIEW_SHARE_DATA_NAME as FIELD_NAME } from './admin-revision-kontragent-review-share.constant';
import { uploadAdminRevisionKontragentReviewShareFormData } from './admin-revision-kontragent-review-share.action';
import { AdminRevisionKontragentReviewShareComponent } from './admin-revision-kontragent-review-share.component';
import { getQuery } from '../../main/navigation/navigation.core';

export function AdminRevisionKontragentReviewShareContainer() {
  const [state, setState] = useReducer(
    adminRevisionKontragentReviewShareReducer,
    initialState,
  );
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    const data = {
      revisionId: getQuery('revisionId'),
      email: email,
    };
    uploadAdminRevisionKontragentReviewShareFormData(data)(setState);
  };

  const getInitialValue = () => {
    return {
      [FIELD_NAME.EMAIL]: '',
    };
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <AdminRevisionKontragentReviewShareComponent
      isPending={isRequestPending(state.form)}
      isSuccess={isRequestSuccess(state.form)}
      isError={isRequestError(state.form)}
      errorMessage={getRequestErrorMessage(state.form)}
      initialValue={getInitialValue()}
      onSubmit={onSubmit}
      email={email}
      onChange={onChange}
    />
  );
}
