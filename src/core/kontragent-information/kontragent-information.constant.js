export const KONTRAGENT_INFORMATION_ROUTE_PATH = '/kontragent-information';

export const TABS_LIST = [
  { id: 1,  text: 'KONTRAGENT_INFORMATION.TABS.DETAIL_INFORMATION' },
  { id: 2,  text: 'KONTRAGENT_INFORMATION.TABS.RISK_RATING_AND_ASSESSMENT' },
  { id: 3,  text: 'KONTRAGENT_INFORMATION.TABS.TESTIMONIALS' },
  { id: 4,  text: 'KONTRAGENT_INFORMATION.TABS.CHECKS' },
  { id: 5,  text: 'KONTRAGENT_INFORMATION.TABS.ARBITRATION_CASES' },
  { id: 6,  text: 'KONTRAGENT_INFORMATION.TABS.RED_ZONE', active: true },
];

export const DANGER_NOTICES_1 = [
  {
    id: 1,
    title: 'По состоянию на 2021-05-14 действовали ограничения на операции по банковским счетам организации, установленные ИФНС',
    description: 'Это означает, что в отношении данной организации ИФНС отправляла в банки своё решение о частичном или полном прекращении расходных операций по счетам (ст. 76 НК РФ). В настоящий момент это решение может быть уже отменено, а расходные операции разрешены.',
  },
  {
    id: 2,
    title: 'Выявлены совпадения по критериям фирм-однодневок, установленных действующим законодательством',
  },
];

export const DANGER_NOTICES_2 = [
  {
    id: 1,
    title: 'Дополнительная проверка контрагента',
    description: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития.',
    price: '1 000',
    hasShadow: true,
    hasBlueBorder: false,
    hasGrayBackground: false,
  },
  {
    id: 2,
    title: 'Очисткая истории',
    description: 'Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения существенных финансовых и административных условий. Услуга дешевле полной очистки.',
    price: '2 500',
    hasShadow: false,
    hasBlueBorder: true,
    hasGrayBackground: true,
  },
  {
    id: 3,
    title: 'Дополнительная проверка контрагента',
    description: 'Идейные соображения высшего порядка, а также укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. ',
    price: '2 500',
    hasShadow: false,
    hasBlueBorder: true,
    hasGrayBackground: true,
  },
  {
    id: 4,
    title: 'Очисткая истории',
    description: 'Равным образом дальнейшее развитие различных форм деятельности требуют определения и уточнения существенных финансовых и административных условий. Услуга дешевле полной очистки.',
    price: '2 500',
    hasShadow: false,
    hasBlueBorder: false,
    hasGrayBackground: true,
  },
];
