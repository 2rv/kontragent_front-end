export const DIALOGS_ROUTE_PATH = '/dialogs';

export const USERS_DIALOG_LIST = [
  {
    id: 1,
    img: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2019/05/fbd730f563e9482da410271f155de502.jpg',
    name: 'Джон Уик',
    status: 'Менеджер',
    statusId: 0,
    content: {
      you: 'Вы:',
      message: 'Я не понимаю как 123 1234 12345',
      date: 'Сегодня',
    },
  },
  {
    id: 2,
    img: 'https://lh3.googleusercontent.com/proxy/GpN47bIiUE8lb6LOfCywaks3s1yEhboTdbwWcU5EaZIBAPB0P0DA7DisXQCtvp8oVjVzxJdts8dkQn08bD714n6dgk2VGyHvjHmWyBYEUx8u8q-HYEGed9nVs5WvniMGdSEhtpI',
    name: 'Дуейн Джонсон',
    status: 'Агент',
    statusId: 1,
    content: {
      message: 'Слушай, да пошло оно всё',
      date: 'Вчера',
    },
  },
  {
    id: 3,
    img: 'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1128x570:1130x568)/origin-imgresizer.eurosport.com/2015/10/28/1721443-36427225-2560-1440.jpg',
    name: 'Джон Сина',
    status: 'Клиент',
    statusId: 2,
    content: {
      message: 'Отличная работа, Джон',
      date: '15:25',
      unreadedMessages: 3,
    },
  },
];

export const DIALOG_MESSAGES = [
  {
    id: 1,
    img: 'https://cdn1.img.armeniasputnik.am/images/2355/68/23556852.jpg',
    message: {
      text: 'Я понять не могу почему так выходит, что не запуск то новый баг какой-то.',
      date: 'Вчера, 14:25',
      you: 'Вы',
    },
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsdgbStTJW8rNzBsJzj0YdBju6RWtQ-TOHA&usqp=CAU',
    message: {
      text: 'Слушай, да пошло оно всё.',
      date: 'Вчера, 15:30',
    },
  },
  {
    id: 3,
    img: 'https://cdn1.img.armeniasputnik.am/images/2355/68/23556852.jpg',
    message: {
      text: 'Да конечно, лучше брошу это дело пойду таксистом поработаю.',
      date: 'Вчера, 15:50',
      you: 'Вы',
    },
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsdgbStTJW8rNzBsJzj0YdBju6RWtQ-TOHA&usqp=CAU',
    message: {
      text: 'А я сварщиком.',
      date: 'Вчера, 15:51',
    },
  },
];
