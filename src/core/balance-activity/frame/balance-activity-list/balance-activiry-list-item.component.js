import styled from 'styled-components';
import {
  SecondaryText,
  PrimaryText,
  PrimaryTitleText,
} from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { ReactComponent as FindIcon } from '../../../../asset/svg/find.svg';
import { ReactComponent as KIcon } from '../../../../asset/svg/k.svg';
import { PrimaryDivider } from '../../../../lib/elements/divider';

export function BalanceActivityListItemComponent(props) {
  const { operation, time, sentMoney, check = false } = props.data;
  return (
    <DividerCase>
      <Container>
        <Content>
          <ImageCase altColor={check}>
            {check ? <FindIcon /> : <KIcon />}
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
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
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
