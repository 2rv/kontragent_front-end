import styled from 'styled-components';

import { PrimaryDivider } from '../../../../lib/elements/divider';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find-icon-15x15.svg';
import { ReactComponent as KIcon } from '../../../../asset/svg/k-icon.svg';
import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from '../../../../lib/elements/text';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';

export function BalanceHistoryListItem(props) {
  const { operation, time, sentMoney, check = false } = props.data;
  return (
    <DividerCase>
      <Container>
        <Content>
          <ImageCase altColor={check}>
            {check ? <WhiteFindIcon /> : <KIcon />}
          </ImageCase>
          <Column>
            <Title tid={operation} />
            <Text tid={time} />
          </Column>
        </Content>
        {sentMoney && <Price tid={`-${sentMoney}`} />}
      </Container>
      <PrimaryDivider />
    </DividerCase>
  );
}
const DividerCase = styled.div`
  display: grid;
  padding: 0 ${spacing(8)};
  transition: 0.2s ease-in;
  &:hover {
    background-color: ${THEME_COLOR.COLOR.SECONDARY};
  }
`;
const Container = styled.div`
  display: flex;
  padding: ${spacing(4)} 0;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(3)};
  min-width: max-content;
`;
const WhiteFindIcon = styled(FindIcon)`
  fill: ${THEME_COLOR.COLOR.BASE};
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const ImageCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  border: none;
  background-color: ${({ altColor }) =>
    altColor ? THEME_COLOR.TEXT.SUCCESS : THEME_COLOR.COLOR.ACCENT};
`;
const Column = styled.div`
  display: flex;
  gap: ${spacing(2)};
  flex-flow: column;
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const Text = styled(PrimaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.LIGHT};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
const Price = styled(PrimaryTitleText)`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-size: ${THEME_SIZE.FONT.STANDART};
`;
