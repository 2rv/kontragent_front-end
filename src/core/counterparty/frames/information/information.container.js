import { InformationComponent } from './information.component';

export function InformationContainer() {
  return <InformationComponent dangerNoticeList={dangerNoticeList} />;
}
export const dangerNoticeList = [
  {
    id: 1,
    title:
      'По состоянию на 2021-05-14 действовали ограничения на операции по банковским счетам организации, установленные ИФНС',
    description:
      'Это означает, что в отношении данной организации ИФНС отправляла в банки своё решение о частичном или полном прекращении расходных операций по счетам (ст. 76 НК РФ). В настоящий момент это решение может быть уже отменено, а расходные операции разрешены.',
  },
  {
    id: 2,
    title:
      'Выявлены совпадения по критериям фирм-однодневок, установленных действующим законодательством',
  },
];
