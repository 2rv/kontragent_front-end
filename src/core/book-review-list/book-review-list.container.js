import { BookReviewListComponent } from './book-review-list.component';
export function BookReviewListContainer() {
  const booksListData = [
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
  return <BookReviewListComponent booksListData={booksListData} />;
}
