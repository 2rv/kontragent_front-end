import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryLink } from '../../../../lib/elements/link';

export function ReferralFindFormComponent(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <PrimaryBox>
      <IndentLayout type="LARGE">
        <SectionLayout>
          <Title tid="REFERRAL.ADD_REFERRAL" />
          <FieldCase>
            <PrimaryField placeholderTid="REFERRAL.FIND_USER" />
            <LightText>
              <TinyText tid="+1500" />
              <LightText tid="REFERRAL.VALUTE" />
              <LightText tid="REFERRAL.FOR_BALANCE" />
              <TinyText tid="10% " />
              <LightText tid="REFERRAL.FROM_EVERY_SPEND_OF_THE_REFERRAL" />.
              <TinyLink tid="REFERRAL.MORE_DETAILS" />
            </LightText>
          </FieldCase>
        </SectionLayout>
      </IndentLayout>
    </PrimaryBox>
  );
}
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const TinyText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const LightText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const TinyLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const FieldCase = styled.div`
  display: grid;
  align-items: center;
  gap: ${spacing(3)};
`;
