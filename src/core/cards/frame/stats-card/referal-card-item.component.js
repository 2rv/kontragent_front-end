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

export function ReferalCardItemComponent() {
  return (
    <CardBody
      title={<TitlePrimary tid="DASHBOARD_CARD.REFERRAL_SYSTEM" />}
      action={<Find />}
      content={
        <Column>
          <Text>
            <ColoredText tid="250" />
            &nbsp;
            <ValuteText tid="DASHBOARD_CARD.VALUTE" />
            &nbsp;
            <Text tid="DASHBOARD_CARD.REFERRAL_ACCRUALS" />
          </Text>
          <Text>
            <ColoredText tid="15" />
            &nbsp;
            <Text tid="DASHBOARD_CARD.REFERRAL_OPPERATIONS" />
          </Text>
          <Link tid="DASHBOARD_CARD.SHOW_MORE" />
        </Column>
      }
    />
  );
}
const Find = styled(FindIcon)`
  fill: ${THEME_COLOR.TEXT.PRIMARY};
`;
const Link = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.SECONDARY};
  margin-top: auto;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${spacing(3)};
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Text = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  line-height: 1.5;
`;
const ColoredText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const ValuteText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
