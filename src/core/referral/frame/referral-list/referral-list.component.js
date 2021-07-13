import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import { ReactComponent as OptionIcon } from '../../../../asset/svg/option-icon.svg';
import { ReferralItemComponent } from './referral-item.component';

export function ReferralListComponent({ referralItems }) {
  return (
    <Container>
      <HeaderCase>
        <PrimaryTitleText tid="REFERRAL.REFERRAL_LIST" />
        <OptionIcon />
      </HeaderCase>
      <Content>
        {referralItems.map((item, index) => (
          <ReferralItemComponent key={item?.id || index} {...item} />
        ))}
      </Content>
    </Container>
  );
}
const HeaderCase = styled.div`
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  gap: ${spacing(6)};
  display: flex;
  flex-direction: column;
`;
const Content = styled(PrimaryBox)`
  padding: ${spacing(6)};
  gap: ${spacing(4.5)};
  display: flex;
  flex-direction: column;
`;
