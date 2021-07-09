import { CompanyReviewListComponent } from './company-review-list.component';

export function CompanyReviewListContainer() {
  return (
    <CompanyReviewListComponent
      selectOption={selectOption}
      companyListData={companyListData}
    />
  );
}
const selectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const companyListData = [
  {
    companyName: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    books: '15',
    kontragent: 25,
    turnover: '56 652.40',
    addCharges: '15',
    risks: '5%',
    generalRating: '3',
    penalties: 0,
    fines: 1500,
    finesNumber: 2,
  },
  {
    companyName: 'ООО "FLYONEDESIGN"',
    books: '0',
    kontragent: 5,
    turnover: '15 150.20',
    addCharges: '0',
    risks: null,
    generalRating: '2,5',
    penalties: 25,
    fines: 2500,
    finesNumber: 1,
  },
];
