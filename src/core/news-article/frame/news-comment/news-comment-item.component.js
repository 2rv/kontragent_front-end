import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { SectionLayout } from '../../../../lib/elements/layout';

export function NewsCommentListItemComponent(props) {
  const { avatar, author, time, text } = props.data;
  return (
    <>
      <CommentItem>
        <Avatar src={avatar} />
        <CommentText type="SMALL">
          <Author tid={author} />
          <Text tid={text} />
          <Time tid={time} />
        </CommentText>
      </CommentItem>
      <PrimaryDivider />
    </>
  );
}

const CommentItem = styled.div`
  display: flex;
  gap: ${spacing(4)};
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
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
