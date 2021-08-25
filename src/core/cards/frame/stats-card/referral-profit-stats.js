import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from 'src/lib/elements/link';

export function ReferralProfitStats() {
  return (
    <Container>
      <Column>
        <Title tid="REFERRAL.BONUS_BALANCE" />
        <div>
          <BoldText tid="500" />
          &nbsp;
          <ValuteText tid="REFERRAL.VALUTE" />
        </div>
        <Link tid="REFERRAL.VIEW_HISTORY" />
      </Column>
      <VerticalDivider />
      <Column>
        <Title tid="REFERRAL.RECEIVED_PERCENTAGE" />
        <div>
          <BoldText tid="25% " />
          &nbsp;
          <RegularText tid="(15 чел.)" />
        </div>
        <Link tid="REFERRAL.VIEW_USERS" />
      </Column>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  justify-content: space-between;
`;
const VerticalDivider = styled.div`
  min-width: 2px;
  display: flex;
  border: 1px solid ${THEME_COLOR.COLOR.SECONDARY};
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
