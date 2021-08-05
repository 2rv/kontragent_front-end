import React from 'react';
import styled from 'styled-components';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';
import { SecondaryTitleText } from '../../../../lib/elements/text';
import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ErrorAlert } from '../../../../lib/elements/alert';
import { SuccessAlert } from '../../../../lib/elements/alert';
import { PrimaryBox } from '../../../../lib/elements/box';
import { PrimaryLoader } from '../../../../lib/elements/loader';

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

    fieldEmail,
    pageLoading,
    dataPending,
    dataError,
    dataErrorMessage,
    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return JSON.stringify(touched) === '{}'
      ? true
      : !isValid ||
          isSubmitting ||
          FormSuccess ||
          pageLoading ||
          dataPending ||
          FormPending;
  };

  return (
    <React.Fragment>
      {(dataPending || pageLoading || FormPending) && <PrimaryLoader />}
      <PrimaryBox>
        <IndentLayout>
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
                  <PrimaryButton
                    tid="SETTINGS.NOTIFICATION.BUTTON"
                    disabled={isSubmitDisabled()}
                  />
                </SectionLayout>

                {(FormError || FormErrorMessage) && (
                  <ErrorAlert tid={`ERROR.${FormErrorMessage}`} />
                )}

                {(dataError || dataErrorMessage) && (
                  <ErrorAlert tid={`ERROR.${dataErrorMessage}`} />
                )}

                {FormSuccess && (
                  <SuccessAlert tid={'SETTINGS.EMAIL.SUCCESS_MESSAGE'} />
                )}
              </SectionLayout>
            </form>
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </React.Fragment>
  );
}

const Subtitle = styled(SecondaryText)`
  line-height: 1.5;
`;
