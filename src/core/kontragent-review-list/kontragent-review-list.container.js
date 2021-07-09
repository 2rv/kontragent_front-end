import { KontragentReviewListComponent } from './kontragent-review-list.component';

export function KontragentReviewListContainer() {
  return (
    <KontragentReviewListComponent
      selectOption={selectOption}
      kontragentListData={kontragentListData}
    />
  );
}
const selectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const kontragentListData = [
  {
    approved: true,
    company: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    userCompany: 'ООО "FLYONE DESIGN"',
    turnover: '56 652.40',
    addCharges: '15',
    risks: '5%',
    userRating: 4,
    generalRating: 3,
  },
  {
    approved: false,
    company: 'ООО "ТЕХЭЛЕКТРО МСК"',
    userCompany: 'ООО "FLYONE DESIGN"',
    turnover: '1 250.40',
    addCharges: '0',
    risks: null,
    userRating: 0,
    generalRating: 5,
  },
];
