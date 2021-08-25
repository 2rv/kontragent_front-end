import styled from 'styled-components';
import { spacing } from '../../lib/theme';
import { BookHeaderContainer, BookListContainer } from './frame';
import { PrimaryLoader } from '../../lib/elements/loader';

export function BookReviewListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListData,
    booksListSelectOption,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <BookHeaderContainer booksListSelectOption={booksListSelectOption} />
        <BookListContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          booksListData={booksListData}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  width: 100%;
`;
