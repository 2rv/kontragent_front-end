import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';

export function ReferalStaticsCardItemComponent() {
  return (
    <Container>
      <ContentCase>
        <Title tid="REFERRAL.BONUS_BALANCE" />
        <Text>
          500 <ValuteText tid="REFERRAL.VALUTE" />
        </Text>
        <ColoredText tid="REFERRAL.VIEW_HISTORY" />
      </ContentCase>
      <VerticalDivider />

      <ContentCase>
        <Title tid="REFERRAL.RECEIVED_PERCENTAGE" />
        <Text>
          25% <RegularText tid="(15 чел.)" />
        </Text>
        <ColoredText tid="REFERRAL.VIEW_USERS" />
      </ContentCase>
    </Container>
  );
}
const VerticalDivider = styled.div`
  width: 2px;
  height: 100%;
  border: 1px solid ${THEME_COLOR.COLOR.SECONDARY};
`;
const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  justify-content: space-between;
`;
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Text = styled(Title)`
  font-size: 24px;
`;
const ColoredText = styled(Title)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const RegularText = styled(PrimaryText)`
  font-size: 18px;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.REGULAR};
`;
const ValuteText = styled(PrimaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: 18px;
`;
const Container = styled(PrimaryBox)`
  height: 98px;
  width: 360px;
  display: flex;
  gap: ${spacing(3)};
  justify-content: space-between;
`;
