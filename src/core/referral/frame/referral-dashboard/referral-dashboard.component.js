import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { ReferalAccountCardItemComponent } from './referal-card-item.component';
import { ReferalStaticsCardItemComponent } from './referal-card-statics-item.component';
export function ReferralDashboardComponent() {
  return (
    <Container>
      <Title tid="REFERRAL.REFERRAL_SYSTEM" />
      <SecondaryText>
        Задача организации, в особенности же начало повседневной работы по
        формированию позиции влечет за собой процесс внедрения и модернизации
        существенных финансовых и административных условий.&nbsp;
        <PrimaryLink tid="REFERRAL.MORE_REFERRAL_SYSTEM" />
      </SecondaryText>
      <Content>
        <ReferalStaticsCardItemComponent />
        <ReferalAccountCardItemComponent />
      </Content>
    </Container>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(8)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(5)};
`;
