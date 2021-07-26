<<<<<<< Updated upstream
import { ReviewsComponent } from './reviews.component';

export function ReviewsContainer() {
  return <ReviewsComponent commentListData={commentListData} />;
=======
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../../../lib/common/navigation/navigation.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../../../main/store/store.service';
// import { reviewsLoad } from './reviews.action';
import { COUNTERPARTY_REVIEWS_STORE_NAME } from './reviews.constant';
import { ReviewsComponent } from './reviews.component';

export function ReviewsContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[COUNTERPARTY_REVIEWS_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   React.useEffect(() => {
  //     dispatch(reviewsLoad());
  //   }, []);

  return (
    <ReviewsComponent
      isPending={isRequestPending(state.reviews)}
      isError={isRequestError(state.reviews)}
      isSuccess={isRequestSuccess(state.reviews)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.reviews)}
      commentListData={commentListData}
    />
  );
>>>>>>> Stashed changes
}
export const commentListData = [
  {
    author: 'Иван Иванов',
    text: `С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития.
	`,
    time: '15 минут назад',
    avatar: 'https://picsum.photos/1/1?grayscale',
    status: {
      statusTid: 'COUNTERPARTY.REVIEWS.TYPE.PLAINTIFF',
      statusId: 1,
    },
  },
  {
    author: 'Лев Львов',
    text: `С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития.
	`,
    time: '5 минут назад',
    avatar: 'https://picsum.photos/1/1?grayscale',
    status: {
      statusTid: 'COUNTERPARTY.REVIEWS.TYPE.DEFENDANT',
      statusId: 0,
    },
  },
  {
    author: 'Лев Львов',
    text: `С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития.
	`,
    time: '5 минут назад',
    avatar: 'https://picsum.photos/1/1?grayscale',
    status: {
      statusTid: 'COUNTERPARTY.REVIEWS.TYPE.DEFENDANT',
      statusId: 0,
    },
  },
];
