import { MyVerificationRequestsListComponent } from './my-verification-requests-list.component';

export function MyVerificationRequestsListContainer() {
  return (
    <MyVerificationRequestsListComponent
      myVerificationListData={myVerificationListData}
      myVerificationSelectOption={myVerificationSelectOption}
    />
  );
}
const myVerificationSelectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const myVerificationListData = [
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
