import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon.svg';
import { PrimaryLink } from '../../../../lib/elements/link';
import { SectionLayout } from '../../../../lib/elements/layout';
export function ReferalCardItemComponent() {
  return (
    <SectionLayout type="MEDIUM">
      <Header>
        <TitleCase>
          <TitlePrimary tid="DASHBOARD_CARD.REFERRAL_SYSTEM" />
        </TitleCase>
        <FindIcon />
      </Header>
      <PrimaryDivider />
      <ContentCase>
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
        </Column>
        <Link tid="DASHBOARD_CARD.SHOW_MORE" />
      </ContentCase>
    </SectionLayout>
  );
}
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
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  flex-direction: column;
`;
const TitlePrimary = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Text = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const ColoredText = styled(TitlePrimary)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const ValuteText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleCase = styled.div`
  display: flex;
  gap: ${spacing(1)};
  align-items: baseline;
`;
