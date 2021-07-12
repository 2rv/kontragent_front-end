import { KontragentReviewRequestListComponent } from './kontragent-review-request-list.component';

export function KontragentReviewRequestListContainer() {
  const listData = [
    {
      id: 2,
      name: `ООО "КАПСТРОЙЭНЕРОГОТЕХ"`,
      price: '60 000 руб.',
      date: '06.08.2020',
      status: 'Ожидает оплаты',
    },
    {
      id: 1,
      name: `ООО "КАПСТРОЙЭНЕРОГОТЕХ"`,
      price: '10 000 руб.',
      date: '02.08.2020',
      status: 'Ожидает оплаты',
    },
    {
      id: 0,
      name: `ООО "КАПСТРОЙЭНЕРОГОТЕХ"`,
      price: '50 000 руб.',
      date: '06.08.2020',
      status: 'Оплачено',
    },
  ];
  return <KontragentReviewRequestListComponent listData={listData} />;
}
