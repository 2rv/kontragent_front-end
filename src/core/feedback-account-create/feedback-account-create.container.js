import React from 'react';
import { useSelector } from 'react-redux';
import { httpRequest } from '../../main/http';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { convertFeedbackAccountCreateSendData } from './feedback-account-create.convert';
import {
  FEEDBACK_ACCOUNT_CREATE_DATA_NAME,
  FEEDBACK_ACCOUNT_CREATE_API,
} from './feedback-account-create.constant';
import { FeedbackAccountCreateComponent } from './feedback-account-create.component';
import { feedbackAccountCreateFormValidation } from './feedback-account-create.validation';

export function FeedbackAccountCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const FeedbackAccountCreateFormSendData = async (values) => {
    const data = convertFeedbackAccountCreateSendData(values, getFileList);
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: FEEDBACK_ACCOUNT_CREATE_API.FEEDBACK_ACCOUNT_CREATE.TYPE,
        url: FEEDBACK_ACCOUNT_CREATE_API.FEEDBACK_ACCOUNT_CREATE.ENDPOINT,
        data,
      });

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
      [FEEDBACK_ACCOUNT_CREATE_DATA_NAME.TITLE]: '',
      [FEEDBACK_ACCOUNT_CREATE_DATA_NAME.DESCRIPTION]: '',
      [FEEDBACK_ACCOUNT_CREATE_DATA_NAME.FILES]: [],
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  const [getFileList, setFileList] = React.useState([]);
  return (
    <FeedbackAccountCreateComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      setFileList={setFileList}
      onSubmitForm={FeedbackAccountCreateFormSendData}
      validation={feedbackAccountCreateFormValidation}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
