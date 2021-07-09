export const KONTRAGENT_CHECKS_ROUTE_PATH = '/kontragent-checks';

export const KONTRAGENT_CHECKS_LIST = [
  {
    id: 1,
    companyName: 'ООО "ТЕХЭЛЕКТРО МСК"',
    price: '20 000 руб.',
    time: '25.08.2021',
    paid: true,
    status: {
      title: 'Стандартная',
      id: 0,
    },
    info: {
      title: 'Выполнено',
      id: 0,
    },
  },
  {
    id: 2,
    companyName: 'ООО "КАПСТРОЙЭНЕРОГОТЕХ"',
    price: '60 000 руб.',
    time: '06.08.2020',
    paid: false,
    status: {
      title: 'Стандартная',
      id: 0,
    },
    info: {
      title: 'Ожидает оплаты',
      id: 1,
    },
  },
  {
    id: 3,
    companyName: 'ООО "ФАЕР ГРУПП ЦЕНТР"',
    price: '50 000 руб.',
    time: '06.08.2020',
    paid: false,
    status: {
      title: 'Расширенная',
      id: 1,
    },
    info: {
      title: 'Выполняется',
      id: 2,
    },
  },
];
