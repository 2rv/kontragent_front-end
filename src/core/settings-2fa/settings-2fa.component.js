import { Settings2FAFormContainer } from './frame/settings-2fa-form';
import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';

export function Settings2FAComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settings2faFormFieldName,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Settings2FAFormContainer
        initialValue={initialValue}
        settings2faFormFieldName={settings2faFormFieldName}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
      />
    </React.Fragment>
  );
}
