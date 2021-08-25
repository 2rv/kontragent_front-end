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
import { PrimaryLink } from '../../../../lib/elements/link';
import { SectionLayout } from '../../../../lib/elements/layout';
import { CardBody } from '../card-body';

export function ReferralSystemStats() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.REFERRAL_SYSTEM" />}
      action={<Find />}
      content={
        <Column>
          <div>
            <ColoredText tid="250" />
            &nbsp;
            <ValuteText tid="DASHBOARD_CARD.VALUTE" />
            &nbsp;
            <Text tid="DASHBOARD_CARD.REFERRAL_ACCRUALS" />
          </div>
          <div>
            <ColoredText tid="15" />
            &nbsp;
            <Text tid="DASHBOARD_CARD.REFERRAL_OPPERATIONS" />
          </div>
          <Link tid="DASHBOARD_CARD.SHOW_MORE" />
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

const Find = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;

const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;

const Text = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const ColoredText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const ValuteText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const Link = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.SECONDARY};
  line-height: 1.5;
`;
