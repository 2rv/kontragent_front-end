import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { SectionLayout } from '../../../../lib/elements/layout';
import { Card } from '../../../cards';

export function NewsAndBlogComponent() {
  return (
    <SectionLayout type="LARGE">
      <TitleCase>
        <Title tid="DASHBOARD.NEWS_AND_BLOG_TITLE" />
        <ViewAll tid="DASHBOARD.VIEW_ALL" />
      </TitleCase>
      <Content>
        <Card type="horizontal-news" />
        <Card type="vertical-news" />
        <Card type="full-news" />
        <Card type="advert-card" />
      </Content>
    </SectionLayout>
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${spacing(8)};
`;
