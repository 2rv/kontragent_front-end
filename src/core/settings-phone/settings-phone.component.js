import { SettingsFormChangePhoneContainer } from './frame/settings-form-change-phone';

export function SettingsPhoneComponent(props) {
  const {
    enableReinitialize,
    validation,
    onSubmitForm,
    initialValue,
    settingsPhoneFieldName,
    pageLoading,
    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,
    dataPending,
    dataError,
    dataErrorMessage,
  } = props;
  return (
    <SettingsFormChangePhoneContainer
      enableReinitialize={enableReinitialize}
      validation={validation}
      onSubmitForm={onSubmitForm}
      initialValue={initialValue}
      settingsPhoneFieldName={settingsPhoneFieldName}
      pageLoading={pageLoading}
      FormPending={FormPending}
      FormError={FormError}
      FormSuccess={FormSuccess}
      FormErrorMessage={FormErrorMessage}
      dataPending={dataPending}
      dataError={dataError}
      dataErrorMessage={dataErrorMessage}
    />
  );
}
