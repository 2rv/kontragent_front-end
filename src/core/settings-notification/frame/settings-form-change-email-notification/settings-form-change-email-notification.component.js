import styled from 'styled-components';
import { SectionLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { TertiaryText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { SecondaryButton } from '../../../../lib/elements/button';
import { CommonError } from '../../../../lib/elements/error';

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
            <CommonError tid={`ERROR.${errorMessage}`} />
          )}
        </SectionLayout>
      </form>
    </SectionLayout>
  );
}

const Subtitle = styled(TertiaryText)`
  line-height: 1.5;
`;
