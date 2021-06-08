import { Settings2FAFormContainer } from './frame/settings-2fa-form';

export function Settings2FAComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    settings2faFormFieldName,
  } = props;
  return (
    <Settings2FAFormContainer
      initialValue={initialValue}
      settings2faFormFieldName={settings2faFormFieldName}
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
