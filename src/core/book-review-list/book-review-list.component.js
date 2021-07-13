import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../lib/theme';
import { BookListContainer } from './frame';
import { SecondaryButton } from '../../lib/elements/button';

export function BookReviewListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListData,
    bookReviewListData,
  } = props;
  return (
    <Container>
      <BookListContainer
        pageLoading={pageLoading}
        isPending={isPending}
        isError={isError}
        isSuccess={isSuccess}
        errorMessage={errorMessage}
        booksListData={booksListData}
        bookReviewListData={bookReviewListData}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: ${spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
