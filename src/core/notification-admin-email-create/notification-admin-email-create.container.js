import React from 'react';
import { useSelector } from 'react-redux';
import { httpRequest } from '../../main/http';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { convertNotificationAdminEmailCreateSendData } from './notification-admin-email-create.convert';
import {
  NOTIFICATION_EMAIL_CREATE_DATA_NAME,
  NOTIFICATION_EMAIL_CREATE_API,
} from './notification-admin-email-create.constant';
import { NotificationAdminEmailCreateComponent } from './notification-admin-email-create.component';
import { notificationAdminEmailCreateFormValidation } from './notification-admin-email-create.validation';

export function NotificationAdminEmailCreateContainer() {
  const { pageLoading } = useSelector((state) => ({
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  const NotificationAdminEmailCreateFormSendData = async (values) => {
    const data = convertNotificationAdminEmailCreateSendData(
      values,
      getFileList,
    );
    setRequestPending(true);
    setRequestSuccess(false);
    setRequestError(false);
    setRequestErrorMessage(null);

    try {
      await httpRequest({
        method: NOTIFICATION_EMAIL_CREATE_API.NOTIFICATION_EMAIL_CREATE.TYPE,
        url: NOTIFICATION_EMAIL_CREATE_API.NOTIFICATION_EMAIL_CREATE.ENDPOINT,
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
      [NOTIFICATION_EMAIL_CREATE_DATA_NAME.EMAIL]: '',
      [NOTIFICATION_EMAIL_CREATE_DATA_NAME.MESSAGE]: '',
      [NOTIFICATION_EMAIL_CREATE_DATA_NAME.FILE_LIST]: [],
    };
  };

  const [isRequestPending, setRequestPending] = React.useState(null);
  const [isRequestError, setRequestError] = React.useState(null);
  const [isRequestSuccess, setRequestSuccess] = React.useState(null);
  const [getRequestErrorMessage, setRequestErrorMessage] = React.useState(null);
  const [getFileList, setFileList] = React.useState([]);
  return (
    <NotificationAdminEmailCreateComponent
      isPending={isRequestPending}
      isError={isRequestError}
      isSuccess={isRequestSuccess}
      initialValue={getInitialValue()}
      setFileList={setFileList}
      onSubmitForm={NotificationAdminEmailCreateFormSendData}
      validation={notificationAdminEmailCreateFormValidation}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage}
    />
  );
}
