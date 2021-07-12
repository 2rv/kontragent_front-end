import { BookListComponent } from './book-list.component';
export function BookListContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListData,
  } = props;
  return (
    <BookListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      booksListData={booksListData}
    />
  );
}
