import styled from 'styled-components';

import { PrimaryBox } from '../../../../../../lib/elements/box';
import { IndentLayout } from '../../../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../../../lib/theme';

export function CompanySpendingHistoryComponent({ companySpendingHistoryList }) {
  return (
    <>
      <CompanySpendingHistoryTitle tid="ENTITY.BALANCE.COMPANY_SPENDING_HISTORY" />
      {companySpendingHistoryList.map((spendingHistory) => (
      <Box key={spendingHistory.id}>
        <Layout type="SMALL">
          <UserImage src={spendingHistory.image} />
          <Container>
            <Content>
              <TitleText>{spendingHistory.title}</TitleText>
            </Content>
            <Content>
              <HistorySpendingTimeText>{spendingHistory.historySpendingTime}</HistorySpendingTimeText>
            </Content>
          </Container>
          <EndContent>
            <SpendingPriceText tid={spendingHistory.spendingPrice} />
          </EndContent>
        </Layout>
      </Box>
      ))}
    </>
  );
}

const CompanySpendingHistoryTitle = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Box = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
  :hover {
    border: 1px solid ${THEME_COLOR.COLOR.LIGHT_GREY};
  }
`;

const Layout = styled(IndentLayout)`
  display: flex;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: ${spacing(2)};
  padding: ${spacing(2)};
  padding-left: ${spacing(4)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${spacing(2)};
`;

const UserImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 30px;
`;

const TitleText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const HistorySpendingTimeText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const EndContent = styled.div`
  display: flex;
  align-items: center;
`;

const SpendingPriceText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.COLOR.VALIDATION};
`;
