import styled from 'styled-components';
import {
  SecondaryText,
  PrimaryText,
  PrimaryTitleText,
} from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { SecondaryButton } from '../../lib/elements/button';
import { PrimaryLoader } from '../../lib/elements/loader';
import { BalanceActivityListContainer } from './frame';

export function BalanceActivityComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    balance,
    balanceActivityListData,
  } = props;

  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <HeaderCase>
          <TitleCase>
            <Title tid="BALANCE.BALANCE_ACTIVITY.TITLE" />
            <Balance tid={balance} />
            <Valute tid="BALANCE.BALANCE_ACTIVITY.VALUTE" />
          </TitleCase>
          <Button tid="BALANCE.BALANCE_ACTIVITY.BUTTON" />
        </HeaderCase>
        <BalanceActivityListContainer
          balanceActivityListData={balanceActivityListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  flex: 1;
  flex-flow: column;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(4)};
`;
const TitleCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: baseline;
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Balance = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Valute = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Button = styled(SecondaryButton)`
  max-width: 226px;
`;
