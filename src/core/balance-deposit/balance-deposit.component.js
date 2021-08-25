import { BalanceFormDepositContainer } from './frame/balance-form-deposit';
import { SectionLayout, IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import { PrimaryLoader } from '../../lib/elements/loader';

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
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container type="LARGE">
        <HeaderCase>
          <Title tid="BALANCE.BALANCE_DEPOSIT.HEADER" />
          <Balance tid="2500" />
          <SecondaryText tid="BALANCE.BALANCE_ACTIVITY.VALUTE" />
        </HeaderCase>
        <PrimaryBox>
          <IndentLayout>
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
    </>
  );
}
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const HeaderCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: baseline;
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Balance = styled(PrimaryTitleText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
