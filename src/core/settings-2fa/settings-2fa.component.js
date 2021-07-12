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
    fieldName,
    validation,
    onSubmitForm,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Settings2FAFormContainer
        initialValue={initialValue}
        fieldName={fieldName}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        validation={validation}
        onSubmitForm={onSubmitForm}
      />
    </React.Fragment>
  );
}
