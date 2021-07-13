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

export function ReferalAccountCardItemComponent() {
  return (
    <Container>
      <Title tid="REFERRAL.REFERRAL_ACCOUNTS" />
      <PrimaryDivider />
      <ContentCase>
        <ColoredText textColor={THEME_COLOR.TEXT.SUCCESS}>
          +3250 &nbsp;
          <ValuteText tid="REFERRAL.VALUTE" />
          &nbsp;
          <Text>
            <Text tid="REFERRAL.REFERRL_FUNDS" />
            <Text tid="REFERRAL.DAY" />
          </Text>
        </ColoredText>
        <ColoredText textColor={THEME_COLOR.TEXT.ACCENT}>
          +16250 &nbsp;
          <ValuteText tid="руб." />
          &nbsp;
          <Text>
            <Text tid="REFERRAL.REFERRL_FUNDS" />
            <Text tid="REFERRAL.ALL_TIME" />
          </Text>
        </ColoredText>
        <ColoredText textColor={THEME_COLOR.TEXT.ACCENT}>
          +250 &nbsp; <ColoredText tid="(25%)" /> &nbsp;
          <ValuteText tid="руб." />
          &nbsp;
          <Text>
            <Text tid="REFERRAL.REFERRAL_PERCENTAGE" />
            <Text tid="REFERRAL.NOW" />
          </Text>
        </ColoredText>
      </ContentCase>
    </Container>
  );
}
const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Text = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const ColoredText = styled(Title)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${({ textColor }) => textColor};
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Container = styled(PrimaryBox)`
  height: 149px;
  width: 338px;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  padding: ${spacing(5)};
  box-shadow: 0px 15px 75px rgba(0, 0, 0, 0.1);
`;
