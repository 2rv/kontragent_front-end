import { BalanceFormDepositContainer } from './frame/balance-form-deposit';
import { SectionLayout, IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';

export function BalanceDepositComponent(props) {
  const {
    initialValue,
    validation,
    onSubmitForm,
    pageLoading,
    isPending,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
    paymentMethod,
  } = props;

  return (
    <SectionLayout type="LARGE">
      <PrimaryBox>
        <IndentLayout type="MEDIUM">
          <BalanceFormDepositContainer
            initialValue={initialValue}
            validation={validation}
            onSubmitForm={onSubmitForm}
            pageLoading={pageLoading}
            isPending={isPending}
            isError={isError}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
            fieldName={fieldName}
            paymentMethod={paymentMethod}
          />
        </IndentLayout>
      </PrimaryBox>
    </SectionLayout>
  );
}
