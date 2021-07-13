import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { AdvertContainer } from '../../../advert';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
export function NewsAndBlogComponent() {
  return (
    <Container>
      <TitleCase>
        <Title tid="DASHBOARD.NEWS_AND_BLOG_TITLE" />
        <ViewAll tid="DASHBOARD.VIEW_ALL" />
      </TitleCase>
      <Content>
        <AdvertContainer type="CARD" />
        <AdvertContainer type="CARD" />
      </Content>
    </Container>
  );
}
const TitleCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const ViewAll = styled(PrimaryLink)`
  color: ${THEME_COLOR.TEXT.BASE};
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
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
