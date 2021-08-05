import { SettingsFormChangePasswordContainer } from './frame/settings-form-change-password';

export function SettingsPasswordComponent(props) {
  const {
    settingsPasswordFieldName,
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    onSubmitForm,
    validation,
  } = props;
  return (
    <SettingsFormChangePasswordContainer
      initialValue={initialValue}
      settingsPasswordFieldName={settingsPasswordFieldName}
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      onSubmitForm={onSubmitForm}
      validation={validation}
    />
  );
}
