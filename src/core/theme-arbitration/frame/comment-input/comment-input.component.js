import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { TextareaField } from '../../../../lib/elements/field';

export function CommentInputComponent(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage, myAvatar } =
    props;
  return (
    <Container>
      <Avatar src={myAvatar} />
      <TextareaField
        isSend
        isFile
        placeholderTid="THEME_ARBITRATION.WRITE_COMMENT"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding-right: ${spacing(6)};
  gap: ${spacing(4)};
  height: 56px;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
