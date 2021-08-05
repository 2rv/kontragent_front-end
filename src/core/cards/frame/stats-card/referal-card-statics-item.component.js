import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from 'src/lib/elements/link';

export function ReferalStaticsCardItemComponent() {
  return (
    <Container>
      <Content>
        <Title tid="REFERRAL.BONUS_BALANCE" />
        <Line>
          <BoldText tid="500" />
          <ValuteText tid="REFERRAL.VALUTE" />
        </Line>
        <Link tid="REFERRAL.VIEW_HISTORY" />
      </Content>
      <VerticalDivider />
      <Content>
        <Title tid="REFERRAL.RECEIVED_PERCENTAGE" />
        <Line>
          <BoldText tid="25% " />
          <RegularText tid="(15 чел.)" />
        </Line>
        <Link tid="REFERRAL.VIEW_USERS" />
      </Content>
    </Container>
  );
}
const Line = styled.div`
  display: inline-flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const VerticalDivider = styled.div`
  min-width: 2px;
  display: flex;
  border: 1px solid ${THEME_COLOR.COLOR.SECONDARY};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  line-height: 1.5;
`;
const BoldText = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.LARGE};
  line-height: 1.5;
`;
const Link = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const RegularText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  line-height: 1.5;
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  line-height: 1.5;
`;
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;
