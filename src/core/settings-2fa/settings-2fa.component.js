import { Settings2FAFormContainer } from './frame/settings-2fa-form';

export function Settings2FAComponent(props) {
  const {
    pageLoading,
    isPending,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    fieldName,
    validation,
    onSubmitForm,
  } = props;
  return (
    <Settings2FAFormContainer
      initialValue={initialValue}
      fieldName={fieldName}
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      validation={validation}
      onSubmitForm={onSubmitForm}
    />
  );
}
