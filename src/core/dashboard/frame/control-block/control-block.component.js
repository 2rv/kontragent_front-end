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
import { ReactComponent as IconPlus } from '../../../../asset/svg/plus.svg';
import { SectionLayout } from '../../../../lib/elements/layout';

export function ControlBlockComponent() {
  return (
    <SectionLayout type="LARGE">
      <Title tid="DASHBOARD.CONTROL_BLOCK_TITLE" />
      <Content>
        {/* <Card type="arbitration-list" />
        <Card type="counterparties-list" />
        <Card type="dialog-list" />
        <Card type="support-list" /> */}
        <Card type="total-stats" />
        <Card type="user-stats" />
        <Card type="service-stats" />
        <Card type="visit-stats" />
        <Card type="referal" />
        <Card type="referral-profit" />
        <Card type="referral-stats" />
      </Content>
      <Button>
        <Plus />
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
const Plus = styled(IconPlus)`
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
