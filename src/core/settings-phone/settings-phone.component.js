import { SettingsFormChangePhoneContainer } from './frame/settings-form-change-phone';

export function SettingsPhoneComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settingsEmailFieldName,
  } = props;
  return (
    <SettingsFormChangePhoneContainer
      initialValue={initialValue}
      settingsEmailFieldName={settingsEmailFieldName}
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
