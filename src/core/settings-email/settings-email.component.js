import { SettingsFormChangeEmailContainer } from './frame/settings-form-change-email.container';

export function SettingEmailComponent(props) {
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
    <SettingsFormChangeEmailContainer
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
