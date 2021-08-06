import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText } from '../../../../lib/elements/text';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option.svg';
import { PrimaryLink } from '../../../../lib/elements/link';
import { CardBody } from '../card-body';

export function TotalStatsCardItemComponent() {
  return (
    <CardBody
      title={
        <>
          <TitlePrimary tid="DASHBOARD_CARD.TOTAL_STATS" />
          <TitleSecondary tid="DASHBOARD_CARD.PERIOD.DAY" />
        </>
      }
      action={<OptionIcon />}
      content={
        <>
          <DiagramCase>
            <Diagram />
          </DiagramCase>
          <Column>
            <TextCase>
              <TinyTextPrimary tid="250" />
              &nbsp;
              <TinyTextSecondary tid="DASHBOARD_CARD.VIEWS_YOUR_CONTERPARTIES" />
            </TextCase>
            <Link tid="DASHBOARD_CARD.LEARN_MORE" />
          </Column>
        </>
      }
    />
  );
}
const Link = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const Diagram = styled.div`
  height: 72px;
  width: 72px;
  border: 10px solid ${THEME_COLOR.COLOR.ACCENT};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const DiagramCase = styled.div`
  height: 72px;
  width: 72px;
`;
const TextCase = styled.span`
  text-align: left;
  gap: ${spacing(1)};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const TitleSecondary = styled(TitlePrimary)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
const TinyTextPrimary = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const TinyTextSecondary = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
