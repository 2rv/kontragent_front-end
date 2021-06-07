import styled from 'styled-components';
import { SectionLayout } from '../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../lib/elements/text';
import { PrimaryField } from '../../../lib/elements/field';
import { SecondaryButton } from '../../../lib/elements/button';
import { CommonError } from '../../../lib/elements/error';
import { spacing } from '../../../lib/theme';

export function Settings2FAFormComponent(props) {
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
          <Settings2FALayout>
            <PrimaryField
              titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
              placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
              name={fieldPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPhoneNumber]}
              error={isFieldError(fieldPhoneNumber)}
            />

            <Button
              tid="LOGIN.LOGIN_FORM.BUTTON"
              disabled={isSubmitDisabled()}
            />
          </Settings2FALayout>

          {(isError || errorMessage) && (
            <CommonError tid={`ERROR.${errorMessage}`} />
          )}
        </SectionLayout>
      </form>
    </SectionLayout>
  );
}

const Settings2FALayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${spacing(3)};
  grid-column-gap: ${spacing(3)};
`;

const Button = styled(SecondaryButton)`
  align-self: flex-end;
`;
