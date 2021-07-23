import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { TextareaField } from '../../../../lib/elements/field';
import { SectionLayout } from '../../../../lib/elements/layout';
import { NewsCommentListItemComponent } from './news-comment-item.component';

export function NewsCommentComponent(props) {
  const { newsComment, myAvatar } = props;
  return (
    <Container type="MEDIUM">
      <Title tid="NEWS_ARTICLE.TITLE" />
      <SectionLayout type="MEDIUM">
        {newsComment.map((data, index) => (
          <NewsCommentListItemComponent key={index} data={data} />
        ))}
      </SectionLayout>
      <FooterCase>
        <Avatar src={myAvatar} />
        <TextareaField
          isFile
          isSend
          placeholderTid="NEWS_ARTICLE.TEXTAREA_PLACEHOLDER_WRITE_COMMENT"
        />
      </FooterCase>
    </Container>
  );
}
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
`;
const FooterCase = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
  width: 100%;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  line-height: 1.5;
`;
