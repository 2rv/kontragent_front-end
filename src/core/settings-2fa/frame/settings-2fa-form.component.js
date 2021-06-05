import styled from 'styled-components';
import { SectionLayout, FormLayout } from '../../../lib/elements/layout';
import { PrimaryField } from '../../../lib/elements/field';
import { PrimaryButton } from '../../../lib/elements/button';
import { CommonError } from '../../../lib/elements/error';
import { CommonLoader } from '../../../lib/elements/loader';
import { THEME_COLOR } from '../../../lib/theme';

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
    <form onSubmit={handleSubmit}>
      <SectionLayout>
        <FormLayout type="double">
          <PrimaryField
            titleTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="LOGIN.LOGIN_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldPhoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPhoneNumber]}
            error={isFieldError(fieldPhoneNumber)}
          />

          <ButtonLayout>
            <Button
              tid="LOGIN.LOGIN_FORM.BUTTON"
              disabled={isSubmitDisabled()}
            />
          </ButtonLayout>
        </FormLayout>

        {(isError || errorMessage) && (
          <CommonError tid={`ERROR.${errorMessage}`} />
        )}

        {isPending && (
          <LoaderLayout>
            <CommonLoader width={17} height={17} />
          </LoaderLayout>
        )}
      </SectionLayout>
    </form>
  );
}

const ButtonLayout = styled.div`
  align-self: end;
`;

const Button = styled(PrimaryButton)`
  color: ${THEME_COLOR.TEXT.BASE};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
`;

const LoaderLayout = styled.div`
  display: flex;
  justify-content: center;
`;
