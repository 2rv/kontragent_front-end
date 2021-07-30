import styled from 'styled-components';

import { ReactComponent as MenuIcon } from '../../../../../../asset/svg/option-icon.svg';
import { ReactComponent as SearchIcon } from '../../../../../../asset/svg/search.svg';

import { StatsCard } from '../../../../../../lib/elements/cards';
import { PrimaryText, SecondaryText } from '../../../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../../../../../lib/theme';

export function StatisticsComponent() {
  return (
    <Container>
      <StatsCard
        title="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.TITLE"
        totalStatsDay="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.DAY"
        headerIcon={<MenuIcon />}
      >
        <CircularProgress />
        <Column>
          <div>
            <TinyTextPrimary tid="250" />&nbsp;
            <TinyTextSecondary tid="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.COUNTERPARTIES_VIEWS" />:
          </div>
          <div>
            <RedText tid="25%" />&nbsp;
            <RedText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.NEGATIVE" />,&nbsp;
            <GreenText tid="25%" />&nbsp;
            <GreenText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.POSITIVE" />&nbsp;
            <TinyTextSecondary tid="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.AND" />&nbsp;
            <BlueText tid="50%" />&nbsp;
            <BlueText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.NOT_RATED" />.
          </div>
          <LinkText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.TOTAL_STATISTICS.LEARN_MORE" />
        </Column>
      </StatsCard>
      <StatsCard
        title="ENTITY.DETAIL_INFORMATION.STATISTICS.STATISTICS_FOR_24H.TITLE"
        headerIcon={<SearchIcon />}
      >
        <Column>
          <div>
            <GreenText tid="250" />&nbsp;
            <EasyBoldText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.STATISTICS_FOR_24H.COUNTERPARTIES_VIEWS" />&nbsp;
            <BottomUnderlineText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.STATISTICS_FOR_24H.LEARN_MORE_ABOUT_EACH" />
          </div>
          <div>
            <RedText tid="1250" />&nbsp;
            <ValuteText tid="руб." />&nbsp;
            <EasyBoldText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.STATISTICS_FOR_24H.ADDITIONAL_ACCRUALS" />&nbsp;
            <BottomUnderlineText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.STATISTICS_FOR_24H.HOW_TO_REDUCE_RISK_ACCRUALS" />
          </div>
          <div>
            <BlueText tid="250 000" />&nbsp;
            <ValuteText tid="руб." />&nbsp;
            <EasyBoldText tid="ENTITY.DETAIL_INFORMATION.STATISTICS.STATISTICS_FOR_24H.TURNOVER" />&nbsp;
          </div>
        </Column>
      </StatsCard>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${spacing(8)};
`;

const TinyTextPrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const TinyTextSecondary = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;

const RedText = styled(TinyTextPrimary)`
  color: ${THEME_COLOR.COLOR.VALIDATION};
`;

const GreenText = styled(TinyTextPrimary)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;

const BlueText = styled(TinyTextPrimary)`
  color: ${THEME_COLOR.COLOR.ACCENT};
`;

const LinkText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.ACCENT};
  margin-top: ${spacing(2)};
`;

const BottomUnderlineText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.TINY};
  text-decoration: underline;
  cursor: pointer;
`;

const EasyBoldText = styled(TinyTextPrimary)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;

const ValuteText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const CircularProgress = styled.div`
  height: 72px;
  width: 72px;
  border: 10px solid ${THEME_COLOR.COLOR.ACCENT};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(1)};
`;
