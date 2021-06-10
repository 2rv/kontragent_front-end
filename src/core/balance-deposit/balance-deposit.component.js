import { BalanceFormDepositContainer } from './frame/balance-form-deposit';

export function BalanceDepositComponent(props) {
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
    <BalanceFormDepositContainer
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
