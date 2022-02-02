import { useState } from 'react';
import { getQuery } from '../../main/navigation/navigation.core';
import { httpRequest } from '../../main/http';
import { FeedbackAdminItemUpdateStatusComponent } from './feedback-admin-item-update-status.component';

export function FeedbackAdminItemUpdateStatusContainer(props) {
  const { initialStatus } = props;
  const [status, setStatus] = useState(initialStatus);
  const [isRequestPending, setRequestPending] = useState(null);
  const [isRequestError, setRequestError] = useState(null);
  const [isRequestSuccess, setRequestSuccess] = useState(true);
  const [getRequestErrorMessage, setRequestErrorMessage] = useState(null);

  const feedbackUpdateStatus = async (status) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      const feedbackId = getQuery('feedbackId');
      await httpRequest({
        method: 'PATCH',
        url: `feedback/${feedbackId}`,
        data: { status },
      });

      setRequestPending(false);
      setRequestSuccess(true);
      setStatus(status);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value) {
      feedbackUpdateStatus(value);
    }
  };

  return (
    <FeedbackAdminItemUpdateStatusComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      errorMessage={getRequestErrorMessage}
      onChange={onChange}
      status={status}
    />
  );
}
