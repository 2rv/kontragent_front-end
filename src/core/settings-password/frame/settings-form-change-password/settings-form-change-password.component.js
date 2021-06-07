import styled from 'styled-components';
import {
  SectionLayout,
  FieldLayout,
  ButtonLayout,
} from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';

export function SettingsFormChangePasswordComponent(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    pageLoading,
    fieldPassword,
    fieldPhoneNumber,
    isSuccess,
    isPending,
    isError,
    errorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid || isSubmitting || isSuccess || pageLoading;
  };

  return (
    <SectionLayout>
      <SecondaryTitleText tid="LOGIN.LOGIN_FORM.HEADER" />
      <form onSubmit={handleSubmit}>
        <SectionLayout>
          <FieldLayout type="double">
            <PrimaryField
              titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPhoneNumber]}
              error={isFieldError(fieldPhoneNumber)}
            />

            <PrimaryField
              titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPassword]}
              error={isFieldError(fieldPassword)}
            />

            <PrimaryField
              titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPhoneNumber]}
              error={isFieldError(fieldPhoneNumber)}
            />
          </FieldLayout>

          <ButtonLayout type="double">
            <Button
              tid="LOGIN.LOGIN_FORM.BUTTON"
              disabled={isSubmitDisabled()}
            />
          </ButtonLayout>

          {(isError || errorMessage) && (
            <CommonError tid={`ERROR.${errorMessage}`} />
          )}
        </SectionLayout>
      </form>
    </SectionLayout>
  );
}

const Button = styled(SecondaryButton)`
  align-self: flex-end;
`;
