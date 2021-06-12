import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { SettingsFormChangePasswordContainer } from './frame/settings-form-change-password';

export function SettingsPasswordComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsPasswordFieldName,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <SettingsFormChangePasswordContainer
        initialValue={initialValue}
        settingsPasswordFieldName={settingsPasswordFieldName}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
}
