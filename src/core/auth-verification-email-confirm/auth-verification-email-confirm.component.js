import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { ErrorAlert } from '../../lib/elements/alert';

export function AuthVerificationEmailConfirmComponent(props) {
  const { pageLoading, isPending, isError, errorMessage } = props;

  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      {(isError || errorMessage) && (
        <ErrorAlert tid={`ERROR.${errorMessage}`} />
      )}
    </React.Fragment>
  );
}
