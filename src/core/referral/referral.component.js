import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import {
  ReferralDashboardComponent,
  ReferralListComponent,
  ReferralFindComponent,
} from './frame';

export function ReferralComponent(props) {
  const { referralItems } = props;
  return (
    <>
      <Background />
      <Content>
        <ReferralDashboardComponent />
        <ReferralListComponent referralItems={referralItems} />
        <ReferralFindComponent />
      </Content>
    </>
  );
}
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)};
`;
const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 336px;
  background-color: ${THEME_COLOR.COLOR.ACCENT};
`;
