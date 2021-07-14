import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';
import { SectionLayout } from '../../../../lib/elements/layout';
import { DashboardCard } from '../../../dashboard-card';
export function NewsAndBlogComponent() {
  return (
    <SectionLayout type="LARGE">
      <TitleCase>
        <Title tid="DASHBOARD.NEWS_AND_BLOG_TITLE" />
        <ViewAll tid="DASHBOARD.VIEW_ALL" />
      </TitleCase>
      <Content>
        <DashboardCard type="vertical-news" />
        <DashboardCard type="vertical-news" />
      </Content>
    </SectionLayout>
  );
}
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spacing(8)};
`;
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
