import { BookListComponent } from './book-list.component';
export function BookListContainer(props) {
  return <BookListComponent booksListData={props.booksListData} />;
}
