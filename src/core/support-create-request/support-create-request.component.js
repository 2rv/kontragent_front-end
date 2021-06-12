import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { SupportFormCreateRequestContainer } from './frame/support-form-create-request';

export function SupportCreateRequestComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
    problemCategory,
  } = props;

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <SupportFormCreateRequestContainer
        initialValue={initialValue}
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        fieldName={fieldName}
        problemCategory={problemCategory}
      />
    </React.Fragment>
  );
}
