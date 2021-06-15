import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';

export function SettingsFormChangeNotificationComponent(props) {
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
      <SectionLayout type="SMALL">
        <SecondaryTitleText tid="SETTINGS.NOTIFICATION.TITLE" />
        <Subtitle tid="SETTINGS.NOTIFICATION.SUBTITLE" />
      </SectionLayout>

      <form onSubmit={handleSubmit}>
        <SectionLayout>
          <SectionLayout type="MEDIUM">
            <PrimaryField
              titleTid="SETTINGS.NOTIFICATION.FIELD.EMAIL.TITLE"
              placeholderTid="SETTINGS.NOTIFICATION.FIELD.EMAIL.PLACEHOLDER"
              name={fieldEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[fieldEmail]}
              error={isFieldError(fieldEmail)}
            />
            <SecondaryButton
              tid="SETTINGS.NOTIFICATION.BUTTON"
              disabled={isSubmitDisabled()}
            />
          </SectionLayout>

          {(isError || errorMessage) && (
            <ErrorAlert tid={`ERROR.${errorMessage}`} />
          )}

          {isSuccess && (
            <SuccessAlert tid={'SETTINGS.NOTIFICATION.SUCCESS_MESSAGE'} />
          )}
        </SectionLayout>
      </form>
    </SectionLayout>
  );
}

const Subtitle = styled(SecondaryText)`
  line-height: 1.5;
`;
