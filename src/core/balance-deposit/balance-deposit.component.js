import { BalanceFormDepositContainer } from './frame/balance-form-deposit';
import { SectionLayout, IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import styled from 'styled-components';

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
    <Container>
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
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  height: max-content;
  width: 100%;
`;
