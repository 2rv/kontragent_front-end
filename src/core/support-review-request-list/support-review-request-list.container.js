import { SupportReviewRequestListComponent } from './support-review-request-list.component';

export function SupportReviewRequestListContainer() {
  return (
    <SupportReviewRequestListComponent
      selectOption={selectOption}
      supportRequestListData={supportRequestListData}
    />
  );
}
const selectOption = [
  { id: 0, tid: 'По дате' },
  { id: 1, tid: 'По имени' },
  { id: 2, tid: 'По статусу' },
];
const supportRequestListData = [
  {
    problemTid: 'DATA.PROBLEM_CATEGORY.1',
    requestCause: 'Мой клиент нарушил правила сайта использовав...',
    requestStatusId: 0,
    status: 'Решён',
    date: 'вчера',
  },
  {
    problemTid: 'DATA.PROBLEM_CATEGORY.1',
    requestCause: 'Я сменил пароль и не могу войти с нового телефона',
    requestStatusId: 1,
    status: 'Рассмотрение',
    date: 'сегодня',
  },
  {
    problemTid: 'DATA.PROBLEM_CATEGORY.1',
    requestCause: 'Я сменил пароль и не могу войти с нового телефона',
    requestStatusId: 2,
    status: 'Отклонён',
    date: '28.06.2021',
  },
];
