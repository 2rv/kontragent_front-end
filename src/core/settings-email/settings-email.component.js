import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { SettingsFormChangeEmailContainer } from './frame/settings-form-change-email.container';

export function SettingEmailComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsEmailFieldName,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <SettingsFormChangeEmailContainer
        initialValue={initialValue}
        settingsEmailFieldName={settingsEmailFieldName}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
}
