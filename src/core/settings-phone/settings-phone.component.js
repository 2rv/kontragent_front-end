import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { SettingsFormChangePhoneContainer } from './frame/settings-form-change-phone';

export function SettingsPhoneComponent(props) {
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
      <SettingsFormChangePhoneContainer
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
