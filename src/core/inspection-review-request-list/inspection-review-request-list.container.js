import { InspectionReviewRequestListComponent } from './inspection-review-request-list.component';
export function InspectionReviewRequestListContainer() {
  const inspectionRequestListData = [
    {
      company: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
      inspectionTypeId: 0,
      inspectionType: 'Стандартная',
      sum: '60 000 руб.',
      date: '06.08.2020',
      inspectionStatusId: 0,
      inspectionStatus: 'Выполнена',
      payed: true,
    },
    {
      company: 'ООО "ТЕХЭЛЕКТРО МСК"',
      inspectionTypeId: 1,
      inspectionType: 'Расширенная',
      sum: '20 000 руб.',
      date: '25.08.2021',
      inspectionStatusId: 1,
      inspectionStatus: 'Ожидает оплаты',
      payed: false,
    },
  ];
  return (
    <InspectionReviewRequestListComponent
      inspectionRequestListData={inspectionRequestListData}
    />
  );
}
