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
import { PrimaryButton } from '../../../../lib/elements/button';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';
import { PrimaryLink } from '../../../../lib/elements/link';
import { CardBody } from '../card-body';

export function AttendanceStatsCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.STATS_ATTENDANCE" />}
      action={<FindIcon />}
      content={
        <Column>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.SUCCESS} tid="3250" />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.UNIQUE_USERS" />
          </TextCase>
          <TextCase>
            <ColoredText color={THEME_COLOR.TEXT.ACCENT} tid="250" />
            &nbsp;
            <TinyPrimaryText tid="DASHBOARD_CARD.ONLINE_USERS" />
          </TextCase>
          <Link tid="DASHBOARD_CARD.SHOW_MORE" />
        </Column>
      }
    />
  );
}
const Link = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.SECONDARY};
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

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const TinyPrimaryText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const ColoredText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${({ color }) => color};
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
