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

export function CommentInputComponent(props) {
  const { myAvatar } = props;
  return (
    <Container>
      <Avatar src={myAvatar} />
      <FieldCase>
        <Field placeholderTid="THEME_ARBITRATION.WRITE_COMMENT" />
        <ActionsCase>
          <FileIcon />
          <SendIcon />
        </ActionsCase>
      </FieldCase>
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
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;
const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
