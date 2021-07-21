import styled from 'styled-components';
import { PrimaryText } from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { PrimaryDivider } from '../../lib/elements/divider';
import {
  NewsContentComponent,
  NewsCommentComponent,
  NewsHeader,
} from './frame';
import { SectionLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout } from '../../lib/elements/layout';
import { PrimaryLoader } from '../../lib/elements/loader';

export function NewsArticleComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    newsArticleContent,
  } = props;
  const {
    newsTitle,
    newsDescription,
    newsTime,
    newsAuthor,
    newsContent,
    newsComment,
    myAvatar,
  } = newsArticleContent;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container type="LARGE">
        <NewsHeader
          newsTitle={newsTitle}
          newsDescription={newsDescription}
          newsAuthor={newsAuthor}
          newsTime={newsTime}
        />
        <ContentCase>
          <Content type="MEDIUM">
            <NewsContentComponent
              newsTime={newsTime}
              newsContent={newsContent}
            />
            <PrimaryDivider />
            <NewsCommentComponent
              myAvatar={myAvatar}
              newsComment={newsComment}
            />
          </Content>
        </ContentCase>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  gap: ${spacing(6)};
`;
const ContentCase = styled(PrimaryBox)`
  display: flex;
  flex-direction: column;
  padding: ${spacing(8)};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
