import styled from 'styled-components';

import { PrimaryDivider } from '../../../../lib/elements/divider';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';

export function BalanceHistoryListItem(props) {
  const { id, image, title, historySpendingTime, spendingPrice } = props.data;
  return (
    <DividerCase>
      <Container type="STANDART">
        <Content>
          <Avatar src={image} />
          <SectionLayout type="SMALL">
            <Line>
              <Title>{title}</Title>
            </Line>
            <Line>
              <TimeText>{historySpendingTime}</TimeText>
            </Line>
          </SectionLayout>
        </Content>
        <PriceText tid={spendingPrice} />
      </Container>
      <Divider />
    </DividerCase>
  );
}
const DividerCase = styled.div`
  display: grid;
  padding: 0 ${spacing(8)};
  &:hover {
    background-color: ${THEME_COLOR.COLOR.BASE};
  }
  transition: 0.2s ease-in;
`;
const Divider = styled(PrimaryDivider)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Container = styled(IndentLayout)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: ${spacing(4)} 0;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const Line = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(2)};
`;
const Title = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const TimeText = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const PriceText = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.STANDART};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${THEME_COLOR.COLOR.VALIDATION};
`;
