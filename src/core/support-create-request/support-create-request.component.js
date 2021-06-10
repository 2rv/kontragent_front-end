import { SupportFormCreateRequestContainer } from './frame/support-form-create-request';

export function SupportCreateRequestComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
  } = props;

  return (
    <SupportFormCreateRequestContainer
      initialValue={initialValue}
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      fieldName={fieldName}
    />
  );
}
