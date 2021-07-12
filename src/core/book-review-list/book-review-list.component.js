import { BookListContainer } from './frame/book-list';
export function BookReviewListComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListData,
  } = props;
  return (
    <BookListContainer
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      booksListData={booksListData}
    />
  );
}
