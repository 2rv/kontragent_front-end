import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find.svg';
import { CardBody } from '../card-body';

export function MyStatsCardItemComponent() {
  return (
    <CardBody
      title={
        <>
          <TitlePrimary tid="DASHBOARD_CARD.YOUR_STATS" />
          &nbsp;
          <TitlePrimary tid="DASHBOARD_CARD.PERIOD.24H" />
        </>
      }
      action={<Find />}
      content={
        <Column>
          <TinyPrimaryText>
            <ColoredText color={THEME_COLOR.TEXT.SUCCESS} tid="250" />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.VIEWS_YOUR_CONTERPARTIES" />
          </TinyPrimaryText>
          <TinyPrimaryText>
            <ColoredText color={THEME_COLOR.TEXT.ERROR} tid="1250" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.ADD_ACCRUALS" />
          </TinyPrimaryText>
          <TinyPrimaryText>
            <ColoredText color={THEME_COLOR.TEXT.ACCENT} tid="250 000" />
            &nbsp;
            <ValuteText
              color={THEME_COLOR.COLOR.LIGHT_GREY}
              tid="DASHBOARD_CARD.VALUTE"
            />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.TURNOVER" />
          </TinyPrimaryText>
        </Column>
      }
    />
  );
}

const Find = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${spacing(3)};
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const ColoredText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${({ color }) => color};
`;
const ValuteText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const TinyPrimaryText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  line-height: 1.5;
`;
