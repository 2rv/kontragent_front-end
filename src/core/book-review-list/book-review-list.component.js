import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { BookReviewHeaderComponent, BookListContainer } from './frame';

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
      <BookReviewHeaderComponent />
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
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
