import styled from 'styled-components';
import { PrimaryTitleText, PrimaryText } from '../../lib/elements/text';
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

export function NewsComponent(props) {
  const {
    newsTitle,
    newsDescription,
    newsTime,
    newsAuthor,
    newsContent,
    newsComment,
    myAvatar,
  } = props;
  return (
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
            <Time tid={props.newsTime} />
            <PrimaryDivider />
            <NewsCommentComponent
              myAvatar={myAvatar}
              newsComment={newsComment}
            />
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </SectionLayout>
  );
}

const Time = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
