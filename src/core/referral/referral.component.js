import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../lib/theme';
import { IndentLayout } from '../../lib/elements/layout';
import {
  ReferralDashboardComponent,
  ReferralListComponent,
  ReferralFindComponent,
} from './frame';

export function ReferralComponent(props) {
  const { referralItems } = props;
  return (
    <Container>
      <Background />
      <Content>
        <ReferralDashboardComponent />
        <ReferralListComponent referralItems={referralItems} />
        <ReferralFindComponent />
      </Content>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${THEME_COLOR.COLOR.BACKGROUND};
`;
const Content = styled(IndentLayout)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
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
