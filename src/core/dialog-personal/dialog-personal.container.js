import { DialogPersonalComponent } from './dialog-personal.component';
import { useEffect } from 'react';
import { dialogPersonalDataLoad } from './dialog-personal.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { DIALOG_PERSONAL_STORE_NAME } from './dialog-personal.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function DialogPersonalContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[DIALOG_PERSONAL_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(dialogPersonalDataLoad());
  //   }, []);

  return (
    <DialogPersonalComponent
      isPending={isRequestPending(state.dialogPersonalData)}
      isError={isRequestError(state.dialogPersonalData)}
      isSuccess={isRequestSuccess(state.dialogPersonalData)}
      errorMessage={getRequestErrorMessage(state.dialogPersonalData)}
      pageLoading={pageLoading}
      dialogPersonalUserListData={dialogPersonalUserListData}
      dialogPersonalMessageListData={dialogPersonalMessageListData}
      dialogPersonalCurrentInfo={dialogPersonalCurrentInfo}
    />
  );
}

const dialogPersonalCurrentInfo = {
  name: 'Кирилл Тураев',
  status: 'Агент',
  statusId: 1,
  genderId: 1,
  lastseen: 'в 12:50',
};
const dialogPersonalUserListData = [
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
  {
    id: 1,
    img: 'https://picsum.photos/1/1?grayscale',
    name: 'Джон Уик',
    status: 'Менеджер',
    statusId: 0,
    content: {
      you: 'Вы:',
      message: 'Отличная работа',
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
const dialogPersonalMessageListData = [
  {
    id: 1,
    img: 'https://picsum.photos/1/1?grayscale',
    message: {
      text: `Я понять не могу почему так выходит. 
		Что не запуск то новый баг какой-то. Я понять не могу почему так выходит. 
		Что не запуск то новый баг какой-то. Я понять не могу почему так выходит. 
		Что не запуск то новый баг какой-то.Я понять не могу почему так выходит. 
		Что не запуск то новый баг какой-то.Я понять не могу почему так выходит. 
		Что не запуск то новый баг какой-то.Я понять не могу почему так выходит. 
		Что не запуск то новый баг какой-то.Я понять не могу почему так выходит. 
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
      text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
