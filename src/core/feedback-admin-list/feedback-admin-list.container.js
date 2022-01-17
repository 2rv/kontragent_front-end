import React from 'react';
import { httpRequest } from '../../main/http';
import { performFeedbackAdminListRowData } from './feedback-admin-list.convert';
import { FEEDBACK_ADMIN_LIST_API } from './feedback-admin-list.constant';
import { FeedbackAdminListComponent } from './feedback-admin-list.component';

export function FeedbackAdminListContainer() {
  React.useEffect(() => {
    getFeedbackAdminList();
  }, []);

  const getFeedbackAdminList = async (data) => {
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);
    setData([]);

    try {
      const res = await httpRequest({
        method: FEEDBACK_ADMIN_LIST_API.GET_FEEDBACK_ADMIN_LIST.TYPE,
        url: FEEDBACK_ADMIN_LIST_API.GET_FEEDBACK_ADMIN_LIST.ENDPOINT,
      });

      const data = performFeedbackAdminListRowData(res.data);

      setRequestPending(false);
      setRequestSuccess(true);
      setData(data);
    } catch (error) {
      if (error.response) {
        setRequestError(true);
        setData([]);
        setRequestPending(false);
        setRequestErrorMessage(error.response.data.message);
      }
    }
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [getData, setData] = React.useState([]);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);

  return (
    <FeedbackAdminListComponent
      isPending={isRequestPending || !isRequestSuccess}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      data={getData}
      errorMessage={getRequestErrorMessage}
    />
  );
}
