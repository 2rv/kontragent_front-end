export const DIALOGS_ROUTE_PATH = '/dialogs';

export const USERS_DIALOG_LIST = [
  {
    id: 1,
    img: 'https://picsum.photos/1/1?grayscale',
    name: 'Джон Уик',
    status: 'Менеджер',
    statusId: 0,
    content: {
      you: 'Вы:',
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Сегодня',
    },
  },
  {
    id: 2,
    img: 'https://picsum.photos/1/1?grayscale',
    name: 'Дуейн Джонсон',
    status: 'Агент',
    statusId: 1,
    content: {
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Вчера',
    },
  },
  {
    id: 3,
    img: 'https://picsum.photos/1/1?grayscale',
    name: 'Джон Сина',
    status: 'Клиент',
    statusId: 2,
    content: {
      message: 'Отличная работа',
      date: '15:25',
      unreadedMessages: 3,
    },
  },
];

export const DIALOG_MESSAGES = [
  {
    id: 1,
    img: 'https://picsum.photos/1/1?grayscale',
    message: {
      text: `Я понять не могу почему так выходит. 
      Что не запуск то новый баг какой-то.`,
      date: 'Вчера, 14:25',
      you: true,
    },
  },
  {
    id: 2,
    img: 'https://picsum.photos/1/1?grayscale',
    message: {
      text: 'Слушай, да пошло оно всё.',
      date: 'Вчера, 15:30',
    },
  },
  {
    id: 3,
    img: 'https://picsum.photos/1/1?grayscale',
    message: {
      text: 'Да конечно, лучше брошу это дело пойду таксистом поработаю.',
      date: 'Вчера, 15:50',
      you: true,
    },
  },
  {
    id: 4,
    img: 'https://picsum.photos/1/1?grayscale',
    message: {
      text: 'А я сварщиком.',
      date: 'Вчера, 15:51',
    },
  },
];
