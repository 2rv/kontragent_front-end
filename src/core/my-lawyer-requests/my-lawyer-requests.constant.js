export const MY_LAWYER_REQUESTS_ROUTE_PATH = '/my-lawyer-requests';

export const REQUESTS_LIST = [
  {
    id: 1,
    name: 'Джон Уик',
    text: 'Жалоба на компанию AirBox',
    time: '15 минут назад',
    messages: '25',
    status: {
      title: 'Контрагент',
      id: 0,
    },
    info: {
      title: 'Решено',
      id: 0,
    },
  },
  {
    id: 2,
    name: 'Дуейн Джонсон',
    text: 'Жалоба по теме нарушения налоговых правил компанией REFLEX',
    time: '40 минут назад',
    messages: '5',
    status: {
      title: 'Жалоба',
      id: 1,
    },
    info: {
      title: 'На рассмотрении',
      id: 1,
    },
  },
  {
    id: 3,
    name: 'Джон Сина',
    text: 'Техническое нарушение договора компанией Ласточка Сейл Систем',
    time: 'Вчера',
    messages: '0',
    status: {
      title: 'Подозрение',
      id: 2,
    },
    info: {
      title: 'Отклонено',
      id: 2,
    },
  },
];
