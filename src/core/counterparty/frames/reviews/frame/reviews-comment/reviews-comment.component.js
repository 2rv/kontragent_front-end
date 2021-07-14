import styled from 'styled-components';
import { PrimaryField } from '../../../../../../lib/elements/field';
import { ReactComponent as SendIcon } from '../../../../../../asset/svg/send-icon.svg';
import { ReactComponent as FileIcon } from '../../../../../../asset/svg/file-icon.svg';
import { spacing, THEME_SIZE } from '../../../../../../lib/theme';

export function ReviewsCommentComponent() {
  return (
    <Container>
      <Avatar src="https://picsum.photos/1/1?grayscale" />
      <FieldCase>
        <PrimaryField placeholderTid="KONTRAGENT_COMMENTS.WRITE_MESSAGE" />
        <ActionsCase>
          <FileIcon />
          <SendIcon />
        </ActionsCase>
      </FieldCase>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
`;

const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;

const FieldCase = styled.div`
  position: relative;
  width: 100%;
`;

const ActionsCase = styled.div`
  position: absolute;
  display: flex;
  grid-column-gap: ${spacing(1)};
  align-items: center;
  right: ${spacing(4)};
  top: 0;
  height: 100%;
`;
