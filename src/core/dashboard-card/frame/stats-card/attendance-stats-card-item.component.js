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

export function AttendanceStatsCardItemComponent() {
  return (
    <Container>
      <Header>
        <TitleCase>
          <TitlePrimary tid="DASHBOARD_CARD.STATS_ATTENDANCE" />
        </TitleCase>

        <Button>
          <FindIcon />
        </Button>
      </Header>
      <PrimaryDivider />
      <ContentCase>
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
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
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
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
