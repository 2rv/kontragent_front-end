import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryField } from '../../../../lib/elements/field';
export function NewsCommentComponent(props) {
  const { newsComment, myAvatar } = props;
  return (
    <Container>
      <Title tid="Комментарии" />
      <CommentList>
        {newsComment.map(({ avatar, author, time, text }) => (
          <CommentItem>
            <Avatar src={avatar} />
            <ContentCase>
              <Author tid={author} />
              <Text tid={text} />
              <Time tid={time} />
              <PrimaryDivider />
            </ContentCase>
          </CommentItem>
        ))}
      </CommentList>
      <FieldCase>
        <Avatar src={myAvatar} />
        <Field />
        мне в лом делать иконки для филда ...Паша
      </FieldCase>
    </Container>
  );
}
const Field = styled(PrimaryField)`
  display: flex;
  height: 56px;
  width: 100%;
  background-color: khaki;
`;
const CommentItem = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: flex-start;
`;
const FieldCase = styled(CommentItem)`
  align-items: center;
`;
const Author = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
`;
const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;
const Title = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Time = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
