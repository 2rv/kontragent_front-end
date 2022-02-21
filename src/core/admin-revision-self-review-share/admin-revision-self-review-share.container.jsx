import { useReducer, useState } from 'react';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import {
  initialState,
  adminRevisionSelfReviewShareReducer,
} from './admin-revision-self-review-share.reducer';

import { ADMIN_REVISION_SELF_REVIEW_SHARE_DATA_NAME as FIELD_NAME } from './admin-revision-self-review-share.constant';
import { uploadAdminRevisionSelfReviewShareFormData } from './admin-revision-self-review-share.action';
import { convertAdminRevisionSelfReviewShareFormData } from './admin-revision-self-review-share.convert';
import { AdminRevisionSelfReviewShareComponent } from './admin-revision-self-review-share.component';

export function AdminRevisionSelfReviewShareContainer(props) {
  const { data } = props;

  const [state, setState] = useReducer(
    adminRevisionSelfReviewShareReducer,
    initialState,
  );
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    const result = convertAdminRevisionSelfReviewShareFormData(data);
    result.email = email;
    uploadAdminRevisionSelfReviewShareFormData(result)(setState);
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
    <AdminRevisionSelfReviewShareComponent
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
