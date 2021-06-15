import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { SettingsFormChangeNotificationContainer } from './frame/settings-form-change-email-notification';

export function SettingsNotificationComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsNotificationFieldName,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <SettingsFormChangeNotificationContainer
        initialValue={initialValue}
        settingsNotificationFieldName={settingsNotificationFieldName}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
}
