import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IconButton } from '../../../../lib/elements/button';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';

export function MyStatsCardItemComponent() {
  return (
    <Сontent>
      <Header>
        <TitleCase>
          <TitlePrimary tid="DASHBOARD_CARD.YOUR_STATS" />
          <TitlePrimary tid="DASHBOARD_CARD.PERIOD.24H" />
        </TitleCase>
        <IconButton icon={FindIcon} />
      </Header>
      <PrimaryDivider />
      <ContentCase>
        <Column>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.SUCCESS} tid="250" />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.VIEWS_YOUR_CONTERPARTIES" />
          </TextCase>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.ERROR} tid="1250" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.ADD_ACCRUALS" />
          </TextCase>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.ACCENT} tid="250 000" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.TURNOVER" />
          </TextCase>
        </Column>
      </ContentCase>
    </Сontent>
  );
}
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
`;
const TitleCase = styled.div`
  display: flex;
  gap: ${spacing(1)};
  align-items: baseline;
`;
const Сontent = styled(PrimaryBox)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(4)};
`;
