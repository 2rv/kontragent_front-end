import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText } from '../../../../lib/elements/text';
import { CardBody } from '../card-body';

export function ReferralAccountStats() {
  return (
    <CardBody
      title={<Title tid="REFERRAL.REFERRAL_ACCOUNTS" />}
      content={
        <Column>
          <div>
            <ColoredText textColor={THEME_COLOR.TEXT.SUCCESS} tid="+3250" />
            &nbsp;
            <ValuteText tid="REFERRAL.VALUTE" />
            &nbsp;
            <Text tid="REFERRAL.REFERRL_FUNDS" />
            &nbsp;
            <Text tid="REFERRAL.DAY" />
          </div>
          <div>
            <ColoredText textColor={THEME_COLOR.TEXT.ACCENT} tid="+16250" />
            &nbsp;
            <ValuteText tid="руб." />
            &nbsp;
            <Text tid="REFERRAL.REFERRL_FUNDS" />
            &nbsp;
            <Text tid="REFERRAL.ALL_TIME" />
          </div>
          <div>
            <ColoredText textColor={THEME_COLOR.TEXT.ACCENT} tid="+250" />
            &nbsp;
            <ColoredText tid="(25%)" />
            &nbsp;
            <ValuteText tid="руб." />
            &nbsp;
            <Text tid="REFERRAL.REFERRAL_PERCENTAGE" />
            &nbsp;
            <Text tid="REFERRAL.NOW" />
          </div>
        </Column>
      }
    />
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;

const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Text = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const ColoredText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${({ textColor }) => textColor};
`;
const ValuteText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
