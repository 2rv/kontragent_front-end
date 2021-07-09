import { BookListContainer } from './frame/book-list';
export function BookReviewListComponent(props) {
  return <BookListContainer booksListData={props.booksListData} />;
}
