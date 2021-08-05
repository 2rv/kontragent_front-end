import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { Card } from '../../../cards';
import { PrimaryButton } from '../../../../lib/elements/button';
import { ReactComponent as IconPlus } from '../../../../asset/svg/plus-icon.svg';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ControlBlockComponent() {
  return (
    <SectionLayout type="LARGE">
      <Title tid="DASHBOARD.CONTROL_BLOCK_TITLE" />
      <Content>
        <Card type="total" />
        <Card type="my" />
        <Card type="referal" />
        <Card type="quantitative" />
        <Card type="service" />
        <Card type="attendance" />
        <Card type="referral-profit" />
        <Card type="referral-stats" />
        <Card type="counterparties" />
        <Card type="dialogs" />
        <Card type="application" />
        <Card type="arbitration" />
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
const Content = styled.div`
  display: grid;
  min-width: fit-content;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${spacing(8)};
`;
