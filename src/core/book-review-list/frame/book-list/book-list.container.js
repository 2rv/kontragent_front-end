import { BookListComponent } from './book-list.component';

export function BookListContainer(props) {
  const { bookReviewListData } = props;
  return <BookListComponent bookReviewListData={bookReviewListData} />;
}
