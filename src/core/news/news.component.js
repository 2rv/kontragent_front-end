import styled from 'styled-components';
import { NewsContentComponent, NewsCommentComponent } from './frame';
import { IndentLayout } from '../../lib/elements/layout';
import { PrimaryTitleText, PrimaryText } from '../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from '../../lib/theme';
import { PrimaryDivider } from '../../lib/elements/divider';

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
    <Container>
      <TitleCase>
        <Title tid={newsTitle} />
        <DescriptionCase>
          <Description tid={newsDescription} />
          <Time tid={`· ${newsTime} ·`} />
          <Author tid={newsAuthor} />
        </DescriptionCase>
      </TitleCase>
      <ContentCase>
        <NewsContentComponent newsTime={newsTime} newsContent={newsContent} />
        <Time tid={props.newsTime} />
        <PrimaryDivider />
        <NewsCommentComponent myAvatar={myAvatar} newsComment={newsComment} />
      </ContentCase>
    </Container>
  );
}

const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${THEME_COLOR.COLOR.BASE};
  padding: ${spacing(4)};
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  gap: ${spacing(2.5)};
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const Description = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
const Time = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
const Author = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Container = styled.div`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: ${spacing(3)};
`;
const TitleCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(0.5)};
`;
const DescriptionCase = styled.div`
  display: flex;
  gap: ${spacing(1.5)};
`;
