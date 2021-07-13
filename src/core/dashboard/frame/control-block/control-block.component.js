import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { DashboardCardContainer } from '../dashboard-card';
import { IconButton } from '../../../../lib/elements/button';
import { ReactComponent as PlusIcon } from '../../../../asset/svg/plus-icon.svg';

export function ControlBlockComponent() {
  return (
    <Container>
      <Title tid="DASHBOARD.CONTROL_BLOCK_TITLE" />
      <Content>
        <PrimaryCase>
          <DashboardCardContainer type="total" />
          <DashboardCardContainer type="my" />
          <DashboardCardContainer type="referal" />
        </PrimaryCase>
        <SecondaryCase>
          <DashboardCardContainer type="counterparties" />
          <DashboardCardContainer type="counterparties" />
        </SecondaryCase>
      </Content>
      <Footer>
        <Button icon={PlusIcon} />
        <TextButton tid="DASHBOARD.ADD_BLOCK" />
      </Footer>
    </Container>
  );
}
const TextButton = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Button = styled(IconButton)`
  padding: ${spacing(2.5)};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  color: ${THEME_COLOR.TEXT.BASE};
`;
const PrimaryCase = styled.div`
  display: grid;
  gap: ${spacing(8)};
  grid-template-columns: repeat(3, 1fr);
`;
const SecondaryCase = styled.div`
  display: grid;
  gap: ${spacing(8)};
  grid-template-columns: repeat(2, 1fr);
`;
const Content = styled.div`
  display: grid;
  gap: ${spacing(8)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;
