import { SettingsFormChangeNotificationContainer } from './frame/settings-form-change-email-notification';

export function SettingsNotificationComponent(props) {
  const {
    pageLoading,
    dataPending,
    dataError,
    dataErrorMessage,
    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,
    settingsNotificationFieldName,
    enableReinitialize,
    initialValue,
    onSubmitForm,
    validation,
  } = props;
  return (
    <SettingsFormChangeNotificationContainer
      pageLoading={pageLoading}
      dataPending={dataPending}
      dataError={dataError}
      dataErrorMessage={dataErrorMessage}
      FormPending={FormPending}
      FormError={FormError}
      FormSuccess={FormSuccess}
      FormErrorMessage={FormErrorMessage}
      settingsNotificationFieldName={settingsNotificationFieldName}
      enableReinitialize={enableReinitialize}
      initialValue={initialValue}
      onSubmitForm={onSubmitForm}
      validation={validation}
    />
  );
}
