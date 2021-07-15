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
      <SectionLayout type="LARGE">
        <NewsHeader
          newsTitle={newsTitle}
          newsDescription={newsDescription}
          newsAuthor={newsAuthor}
          newsTime={newsTime}
        />
        <PrimaryBox>
          <IndentLayout type="STANDART">
            <SectionLayout type="LARGE">
              <NewsContentComponent
                newsTime={newsTime}
                newsContent={newsContent}
              />
              <Time tid={newsTime} />
              <PrimaryDivider />
              <NewsCommentComponent
                myAvatar={myAvatar}
                newsComment={newsComment}
              />
            </SectionLayout>
          </IndentLayout>
        </PrimaryBox>
      </SectionLayout>
    </>
  );
}

const Time = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
