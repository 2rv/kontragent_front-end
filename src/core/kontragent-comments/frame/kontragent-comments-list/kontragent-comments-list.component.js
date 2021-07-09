import styled from 'styled-components';

import { ReactComponent as SendIcon } from '../../../../asset/svg/send-icon.svg';
import { ReactComponent as FileIcon } from '../../../../asset/svg/file-icon.svg';

import { PrimaryDivider } from '../../../../lib/elements/divider';
import { PrimaryField } from '../../../../lib/elements/field';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE, THEME_COLOR, THEME_VALUE } from '../../../../lib/theme';

export function KontragentCommentsListComponent({ kontragentCommentsList }) {
  return (
    <div>
      <CommentList>
        {kontragentCommentsList.map(({ avatar, author, time, text, status }) => (
          <CommentItem>
            <Avatar src={avatar} />
            <ContentCase>
              <div>
                <Author tid={author} />&nbsp;
                <Status statusId={status.id}>{status.title}</Status>
              </div>
              <Text tid={text} />
              <Time tid={time} />
              <PrimaryDivider />
            </ContentCase>
          </CommentItem>
        ))}
      </CommentList>
      <FooterCase>
        <Avatar src='https://cdn.7days.ru/upload/images/bb8/7c5a98f4a0e6eab48972c70f942b6.jpg' />
        <FieldCase>
          <PrimaryField placeholderTid="Написать комментарий" />
          <ActionsCase>
            <FileIcon />
            <SendIcon />
          </ActionsCase>
        </FieldCase>
      </FooterCase>
    </div>
  );
}

const ActionsCase = styled.div`
  position: absolute;
  right: ${spacing(4)};
  top: ${spacing(6)};
  gap: ${spacing(3)};
  display: flex;
  align-items: center;
`;

const FieldCase = styled.div`
  position: relative;
  width: 100%;
`;

const CommentItem = styled.div`
  display: flex;
  gap: ${spacing(4)};
`;

const FooterCase = styled(CommentItem)`
  align-items: center;
`;

const Author = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Text = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 21px;
`;

const ContentCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
  margin-top: ${spacing(6)};
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
  margin-top: ${spacing(3)};
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};
`;

const Time = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;

const Status = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.PURPLE;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;
