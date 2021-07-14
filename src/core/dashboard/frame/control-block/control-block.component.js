import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { DashboardCard } from '../../../dashboard-card';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ReactComponent as IconPlus } from '../../../../asset/svg/plus-icon.svg';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ControlBlockComponent() {
  return (
    <SectionLayout type="LARGE">
      <Title tid="DASHBOARD.CONTROL_BLOCK_TITLE" />
      <Content>
        <PrimaryCase>
          <DashboardCard type="total" />
          <DashboardCard type="my" />
          <DashboardCard type="referal" />
        </PrimaryCase>
        <SecondaryCase>
          <DashboardCard type="counterparties" />
          <DashboardCard type="counterparties" />
        </SecondaryCase>
      </Content>
      <Button>
        <PlusIcon />
        <ButtonText tid="DASHBOARD.ADD_BLOCK" />
      </Button>
    </SectionLayout>
  );
}
const Button = styled(PrimaryButton)`
  height: 40px;
  gap: ${spacing(3)};
  width: max-content;
  align-items: center;
  display: flex;
  background-color: transparent;
  padding: 0;
`;
const ButtonText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const PlusIcon = styled(IconPlus)`
  width: 40px;
  height: 40px;
  padding: ${spacing(2.5)};
  background-color: ${THEME_COLOR.COLOR.PRIMARY};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
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
