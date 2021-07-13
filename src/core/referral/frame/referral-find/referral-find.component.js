import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon-15x15.svg';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryLink } from '../../../../lib/elements/link';
export function ReferralFindComponent() {
  return (
    <Container>
      <PrimaryTitleText tid="REFERRAL.REFERRAL_LIST" />
      <FieldCase>
        <FindField placeholderTid="REFERRAL.FIND_USER" />
        <IconFind />
        <LightText>
          <TinyText tid="+1500" /> <LightText tid="REFERRAL.VALUTE" />
          <LightText tid="REFERRAL.FOR_BALANCE" /> <TinyText tid="10% " />
          <LightText tid="REFERRAL.FROM_EVERY_SPEND_OF_THE_REFERRAL" />.
          <TinyLink tid="REFERRAL.MORE_DETAILS" />
        </LightText>
      </FieldCase>
    </Container>
  );
}

const TinyText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const LightText = styled(TinyText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const TinyLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const FindField = styled(PrimaryField)`
  padding: ${spacing(4)};
`;
const IconFind = styled(FindIcon)`
  position: absolute;
  right: ${spacing(4)};
  fill: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const FieldCase = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  gap: ${spacing(3)};
`;
const Container = styled.div`
  padding: ${spacing(6)};
  gap: ${spacing(4)};
  display: flex;
  flex-direction: column;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
