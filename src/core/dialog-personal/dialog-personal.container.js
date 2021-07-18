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
    img: 'data:image/jpeg;base64,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',
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
    img: 'data:image/jpeg;base64,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',
    name: 'Дуейн Джонсон',
    status: 'Агент',
    statusId: 2,
    content: {
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Вчера',
    },
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6uJ8hulxDIkfcskbltYkq6zknxkax-aNwzg&usqp=CAU',
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
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU',
    name: 'Джон Уик',
    status: 'Менеджер',
    statusId: 2,
    content: {
      you: 'Вы:',
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Сегодня',
    },
  },
  {
    id: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU',
    name: 'Дуейн Джонсон',
    status: 'Агент',
    statusId: 2,
    content: {
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Вчера',
    },
  },
  {
    id: 6,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgBAVJwqCu4_k7is4kwmtaXwZfzOjgvlzag&usqp=CAU',
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
    id: 7,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBhN3xCWonWztKURwk75Ek74jY9Vs17Etaw&usqp=CAU',
    name: 'Джон Уик',
    status: 'Менеджер',
    statusId: 2,
    content: {
      you: 'Вы:',
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Сегодня',
    },
  },
  {
    id: 8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPe7yN7WdrGApjx3Nr9sFGEglLcT89K9PSgQ&usqp=CAU',
    name: 'Дуейн Джонсон',
    status: 'Агент',
    statusId: 2,
    content: {
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Вчера',
    },
  },
  {
    id: 9,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpnslabIwiCbhDln84JLPgfWYNRcjTW4axw&usqp=CAU',
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
    id: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUVuUer3Cjc4XgRHitH8oTOLJ68lWE3Ti9Q&usqp=CAU',
    name: 'Джон Уик',
    status: 'Менеджер',
    statusId: 2,
    content: {
      you: 'Вы:',
      message: 'Отличная работа',
      date: 'Сегодня',
    },
  },
  {
    id: 11,
    img: 'https://77.img.avito.st/640x480/9591336877.jpg',
    name: 'Дуейн Джонсон',
    status: 'Агент',
    statusId: 2,
    content: {
      message:
        'Отличная работа, Отличная работа, Отличная работа, Отличная работа,',
      date: 'Вчера',
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
      text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
