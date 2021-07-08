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
import { ReactComponent as SendIcon } from '../../../../asset/svg/send-icon.svg';
import { ReactComponent as FileIcon } from '../../../../asset/svg/file-icon.svg';
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
      <FooterCase>
        <Avatar src={myAvatar} />
        <FieldCase>
          <Field placeholderTid="Написать комментарий" />
          <ActionsCase>
            <FileIcon />
            <SendIcon />
          </ActionsCase>
        </FieldCase>
      </FooterCase>
    </Container>
  );
}
const ActionsCase = styled.div`
  position: absolute;
  right: ${spacing(4)};
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;
const FieldCase = styled.div`
  position: relative;
  display: grid;
  height: 56px;
  width: 100%;
  align-items: center;
`;
const Field = styled(PrimaryField)``;
const CommentItem = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: flex-start;
`;
const FooterCase = styled(CommentItem)`
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
