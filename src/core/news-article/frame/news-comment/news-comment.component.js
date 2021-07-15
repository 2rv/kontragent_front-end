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
import { SectionLayout } from '../../../../lib/elements/layout';

export function NewsCommentComponent(props) {
  const { newsComment, myAvatar } = props;
  return (
    <SectionLayout type="MEDIUM">
      <Title tid="Комментарии" />
      <SectionLayout type="MEDIUM">
        {newsComment.map(({ avatar, author, time, text }) => (
          <CommentItem type="MEDIUM">
            <Avatar src={avatar} />
            <CommentText type="MEDIUM">
              <Author tid={author} />
              <Text tid={text} />
              <Time tid={time} />
              <PrimaryDivider />
            </CommentText>
          </CommentItem>
        ))}
      </SectionLayout>
      <FooterCase>
        <Avatar src={myAvatar} />
        <FieldCase>
          <PrimaryField placeholderTid="Написать комментарий" />
          <ActionsCase>
            <FileIcon />
            <SendIcon />
          </ActionsCase>
        </FieldCase>
      </FooterCase>
    </SectionLayout>
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
const CommentItem = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;
const FooterCase = styled.div`
  display: flex;
  gap: ${spacing(4)};
  margin-top: ${spacing(3)};
  align-items: center;
`;
const Author = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const CommentText = styled(SectionLayout)`
  margin-top: ${spacing(2)};
`;
const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
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
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
