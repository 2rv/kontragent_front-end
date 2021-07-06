import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { StatisticsCardComponent } from '../../../statistics-card';

export function ControlBlockComponent() {
  return (
    <Container>
      <Title tid={`Блок управления`} />
      <Content>
        <StatisticsCardComponent type="total" />
        <StatisticsCardComponent type="my" />
        <StatisticsCardComponent type="referal" />
      </Content>
    </Container>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  color: ${THEME_COLOR.TEXT.BASE};
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing(8)};
`;

const Container = styled.div`
  position: relative;
  display: grid;
  gap: ${spacing(6)};
`;
