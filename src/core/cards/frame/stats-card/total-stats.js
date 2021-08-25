import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option.svg';
import { PrimaryLink } from '../../../../lib/elements/link';
import { CardBody } from '../card-body';

export function TotalStatsCardItem() {
  return (
    <CardBody
      title={
        <Line>
          <TitlePrimary tid="DASHBOARD_CARD.TOTAL_STATS" />
          <TitleSecondary tid="DASHBOARD_CARD.PERIOD.DAY" />
        </Line>
      }
      action={<OptionIcon />}
      content={
        <Container>
          <DiagramCase>
            <Diagram />
          </DiagramCase>
          <Column>
            <div>
              <TinyTextPrimary tid="250" />
              &nbsp;
              <TinyTextSecondary tid="DASHBOARD_CARD.VIEWS_YOUR_CONTERPARTIES" />
            </div>
            <Link tid="DASHBOARD_CARD.LEARN_MORE" />
          </Column>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const Line = styled.div`
  display: inline-flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const TitleSecondary = styled(SecondaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
`;

const DiagramCase = styled.div`
  height: 72px;
  width: 72px;
`;
const Diagram = styled.div`
  height: 72px;
  width: 72px;
  border: 10px solid ${THEME_COLOR.COLOR.ACCENT};
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const TinyTextPrimary = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const TinyTextSecondary = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
const Link = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
