import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ReferralItemComponent(props) {
  const { avatar, name, referralSignedData, receivedMonth, receivedAllTime } =
    props;
  const Procent = Math.round(receivedAllTime / receivedMonth);
  return (
    <Container>
      <UserCase>
        <Avatar src={avatar} />
        <SectionLayout type="SMALL">
          <Username tid={name} />
          <ValuteText>
            <ValuteText tid="REFERRAL.YOUR_REFERRAL_FROM" />{' '}
            <SecondaryText tid={referralSignedData} />
          </ValuteText>
        </SectionLayout>
      </UserCase>
      <MoneyInfoCase>
        <SecondaryText>
          {receivedAllTime} <ValuteText tid="REFERRAL.VALUTE" />
        </SecondaryText>
        <RecivedMonth>
          {receivedMonth} <ValuteText tid="REFERRAL.VALUTE" />
          <SecondaryText tid={`(${Procent}%)`} />
        </RecivedMonth>
      </MoneyInfoCase>
    </Container>
  );
}
const Username = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const RecivedMonth = styled(Username)`
  font-size: 18px;
`;
const UserCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;

const MoneyInfoCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  align-items: flex-end;
`;
const ValuteText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Avatar = styled.img`
  height: 56px;
  width: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Container = styled(PrimaryBox)`
  display: flex;
  justify-content: space-between;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  padding: ${spacing(3)} ${spacing(4)};
  align-items: center;
`;
