import { SettingsFormChangeEmailContainer } from './frame/settings-form-change-email.container';

export function SettingEmailComponent(props) {
  const {
    validation,
    onSubmitForm,
    pageLoading,
    FormPending,
    FormError,
    FormSuccess,
    FormErrorMessage,
    initialValue,
    settingsEmailFieldName,
    enableReinitialize,
    dataPending,
    dataError,
    dataErrorMessage,
  } = props;
  return (
    <SettingsFormChangeEmailContainer
      validation={validation}
      onSubmitForm={onSubmitForm}
      enableReinitialize={enableReinitialize}
      initialValue={initialValue}
      settingsEmailFieldName={settingsEmailFieldName}
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
