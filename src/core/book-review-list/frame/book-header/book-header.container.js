import { BookHeaderComponent } from './book-header.component';

export function BookHeaderContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    booksListSelectOption,
  } = props;
  return (
    <BookHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      booksListSelectOption={booksListSelectOption}
    />
  );
}
