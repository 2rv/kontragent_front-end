import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';
import { AdvertContainer } from '../../../advert';
import { PrimaryTitleText } from '../../../../lib/elements/text';

export function NewsAndBlogComponent() {
  return (
    <Container>
      <Title tid={`Новости & блог`} />
      <Content>
        <AdvertContainer type="CARD" />
        <AdvertContainer type="CARD" />
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
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing(8)};
`;

const Container = styled.div`
  position: relative;
  display: grid;
  gap: ${spacing(6)};
`;
