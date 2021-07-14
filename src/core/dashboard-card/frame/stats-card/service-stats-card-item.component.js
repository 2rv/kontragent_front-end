import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';

export function ServiceStatsCardItemComponent() {
  return (
    <Container>
      <Header>
        <TitleCase>
          <TitlePrimary tid="DASHBOARD_CARD.SERVICE_STATS" />
          <TitlePrimary tid="DASHBOARD_CARD.PERIOD.24H" />
        </TitleCase>
        <Button>
          <FindIcon />
        </Button>
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <Column>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.SUCCESS} tid="+32500" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.DONATES_PER_DAY" />
          </TextCase>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.ERROR} tid="-1250" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.SPENT_BALANCES_DAY" />
          </TextCase>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.ACCENT} tid="+250" />
            &nbsp;
            <ColoredText tid="(25%)" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.REFERRAL_ACCRUALS" />
          </TextCase>
        </Column>
      </ContentCase>
    </Container>
  );
}
const Button = styled(PrimaryButton)`
  width: 40px;
  height: 40px;
  padding: ${spacing(2.5)};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
`;
const TextCase = styled.span`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${spacing(2)};
`;
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const ColoredText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${({ color }) => color};
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const TinyPrimaryText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleCase = styled.div`
  display: flex;
  gap: ${spacing(1)};
  align-items: baseline;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
