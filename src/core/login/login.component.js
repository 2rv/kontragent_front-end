import React from 'react';
import { PrimaryLoader } from '../../lib/elements/loader';
import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { LoginHeaderContainer } from './frame/login-header';
import { LoginFormContainer } from './frame/login-form';
import { LoginFooterContainer } from './frame/login-footer';

export function LoginComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
  } = props;
  return (
    <React.Fragment>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            <LoginHeaderContainer />
            <LoginFormContainer
              initialValue={initialValue}
              pageLoading={pageLoading}
              isPending={isPending}
              isError={isError}
              isSuccess={isSuccess}
              errorMessage={errorMessage}
              validation={validation}
              onSubmitForm={onSubmitForm}
              fieldName={fieldName}
            />
            <LoginFooterContainer />
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </React.Fragment>
  );
}
