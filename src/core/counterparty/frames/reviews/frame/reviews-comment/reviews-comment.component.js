import styled from 'styled-components';
import { TextareaField } from '../../../../../../lib/elements/field';
import { spacing, THEME_SIZE } from '../../../../../../lib/theme';

export function ReviewsCommentComponent() {
  return (
    <Container>
      <Avatar src="https://picsum.photos/1/1?grayscale" />
      <TextareaField
        isFile
        isSend
        placeholderTid="COUNTERPARTY.REVIEWS.WRITE_MESSAGE"
      />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  gap: ${spacing(3)};
  padding-right: ${spacing(6)};
  align-items: center;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
