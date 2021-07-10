import { BookReviewListComponent } from './book-review-list.component';

export function BookReviewListContainer() {
  return (
    <BookReviewListComponent
      bookReviewListSelectOption={bookReviewListSelectOption}
      bookReviewListData={bookReviewListData}
    />
  );
}
const bookReviewListSelectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const bookReviewListData = [
  {
    loadDate: '3 Фев 2020',
    bookPeriod: '1 Сен 2019 - 01 Окт 2021',
    companyName: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    bookType: 'Книга покупок',
    kontragentNumber: '50',
  },
  {
    loadDate: '5 Янв 2019',
    bookPeriod: '1 Окт 2017 - 31 Дек 2017',
    companyName: 'ООО "FLYONE DESIGN"',
    bookType: 'Книга покупок',
    kontragentNumber: '25',
  },
];
