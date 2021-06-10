import {
  SectionLayout,
  FieldLayout,
  ButtonLayout,
} from '../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../lib/elements/text';
import { PrimaryField } from '../../../lib/elements/field';
import { SecondaryButton } from '../../../lib/elements/button';
import { CommonError } from '../../../lib/elements/error';

export function SettingsFormChangeEmailComponent(props) {
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
    fieldEmail,
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
      <SecondaryTitleText tid="SETTINGS.EMAIL.TITLE" />
      <form onSubmit={handleSubmit}>
        <SectionLayout>
          <FieldLayout type="double">
            <PrimaryField
              titleTid="SETTINGS.EMAIL.FIELD.EMAIL.TITLE"
              placeholderTid="SETTINGS.EMAIL.FIELD.EMAIL.PLACEHOLDER"
              name={fieldEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldEmail]}
              error={isFieldError(fieldEmail)}
            />

            <PrimaryField
              titleTid="SETTINGS.EMAIL.FIELD.PASSWORD.TITLE"
              placeholderTid="SETTINGS.EMAIL.FIELD.PASSWORD.PLACEHOLDER"
              name={fieldPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldPassword]}
              error={isFieldError(fieldPassword)}
            />
          </FieldLayout>

          <ButtonLayout type="double">
            <SecondaryButton
              tid="SETTINGS.EMAIL.BUTTON"
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
