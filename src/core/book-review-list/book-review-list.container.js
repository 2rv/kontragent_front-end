import { BookReviewListComponent } from './book-review-list.component';
import { useEffect } from 'react';
import { bookReviewListLoad } from './book-review-list.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { BOOK_REVIEW_LIST_STORE_NAME } from './book-review-list.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function BookReviewListContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[BOOK_REVIEW_LIST_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));
  //   useEffect(() => {
  //     dispatch(bookReviewListLoad());
  //   }, []);

  return (
    <BookReviewListComponent
      isPending={isRequestPending(state.bookReviewList)}
      isError={isRequestError(state.bookReviewList)}
      isSuccess={isRequestSuccess(state.bookReviewList)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.bookReviewList)}
      booksListData={booksListData}
      booksListSelectOption={booksListSelectOption}
    />
  );
}
export const booksListSelectOption = [
  { id: 0, tid: '1' },
  { id: 1, tid: '2' },
  { id: 2, tid: '3' },
];
const booksListData = [
  {
    loadDate: '31 Фев 2020',
    bookPeriod: '30 Сен 2019 - 01 Окт 2021',
    companyName: 'ООО "ПЕРЕИСПОДВЫПОДВЕРТА НА ДОНУ"',
    bookType: 'Книга переисподвыподверта',
    kontragentNumber: '99999',
  },
  {
    loadDate: '5 Янв 2019',
    bookPeriod: '1 Окт 2017 - 31 Дек 2017',
    companyName: 'ООО "FLYONE DESIGN"',
    bookType: 'Книга покупок',
    kontragentNumber: '25',
  },
];
