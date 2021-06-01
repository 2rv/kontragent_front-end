import React from 'react';

import styled from 'styled-components';

import { PrimaryBox } from '../../../../lib/elements/box';
import { LoginHeaderComponent } from '../login-header';
import { LoginFooterComponent } from '../login-footer';
import { FieldLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { CommonLoader } from '../../../../lib/elements/loader';
import { CommonError } from '../../../../lib/elements/error';

import { spacing } from '../../../../lib/theme';

export function LoginFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,

    isPending,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}' ? true : !isValid;
  };

  return (
    <PrimaryBox>
      <LoginFormComponentLayout>
        <LoginHeaderComponent />
        <form onSubmit={handleSubmit}>
          <Container>
            <FieldLayout>
              <PrimaryField
                titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
                placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
                name={fieldLogin}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldLogin]}
                error={isFieldError(fieldLogin)}
              />

              <PrimaryField
                titleTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.TITLE"
                placeholderTid="LOGIN.LOGIN_FORM.FIELD.PASSWORD.PLACEHOLDER"
                name={fieldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[fieldPassword]}
                error={isFieldError(fieldPassword)}
                type="password"
              />
            </FieldLayout>
            <PrimaryButton
              tid="LOGIN.LOGIN_FORM.BUTTON"
              disabled={isSubmitDisabled()}
            />

            {errorMessage && <CommonError tid={`ERROR.${errorMessage}`} />}
            {isPending && (
              <LoaderLayout>
                <CommonLoader width={17} height={17} />
              </LoaderLayout>
            )}
          </Container>
        </form>
        <LoginFooterComponent />
      </LoginFormComponentLayout>
    </PrimaryBox>
  );
}

const LoginFormComponentLayout = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;

const Container = styled.div`
  display: grid;
  gap: ${spacing(4)};
`;

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;
