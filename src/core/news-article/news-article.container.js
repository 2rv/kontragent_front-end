import { NewsArticleComponent } from './news-article.component';
import { useEffect } from 'react';
import { newsArticleContentLoad } from './news-article.action';
import { useDispatch, useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { NEWS_ARTICLE_STORE_NAME } from './news-article.constant';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

export function NewsArticleContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[NEWS_ARTICLE_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME].pageLoading,
  }));

  //   useEffect(() => {
  //     dispatch(newsArticleContentLoad());
  //   }, []);
  return (
    <NewsArticleComponent
      isPending={isRequestPending(state.newsArticleContent)}
      isError={isRequestError(state.newsArticleContent)}
      isSuccess={isRequestSuccess(state.newsArticleContent)}
      pageLoading={pageLoading}
      errorMessage={getRequestErrorMessage(state.newsArticleContent)}
      newsArticleContent={newsArticleContent}
    />
  );
}
const newsArticleContent = {
  newsTitle: 'Новая система проверки контрагентов!',
  newsDescription: 'Без задержек, проблем и недоразумений!',
  newsTime: '15 минут назад',
  newsAuthor: 'Иван Иванов',
  newsContent: {
    primary: [
      'Как это работает?',
      `Почему это так круто?`,
      `Чем это поможет конкретно Вам?`,
    ],
    secondary: [
      `С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития.`,
      `Не следует, однако забывать, что дальнейшее развитие различных форм деятельности позволяет оценить значение модели развития. Равным образом дальнейшее развитие различных форм деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.`,
      `Не следует, однако забывать, что дальнейшее развитие различных форм деятельности позволяет оценить значение модели развития. Равным образом дальнейшее развитие различных форм деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.`,
      `Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Равным образом реализация намеченных плановых заданий требуют определения и уточнения форм развития.`,
    ],
    base: [
      `Таким образом консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании направлений прогрессивного развития. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании дальнейших направлений развития.`,
    ],
    image: [
      'https://harboursideplace.com/wp-content/uploads/2016/12/Finding-Dory-1000px-x-500px.jpg',
      'https://harboursideplace.com/wp-content/uploads/2016/12/Finding-Dory-1000px-x-500px.jpg',
    ],
  },
  newsComment: [
    {
      author: 'Иван Иванов',
      text: `С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития.
	  `,
      time: '15 минут назад',
      avatar: 'http://archilab.online/images/1/123.jpg',
    },
    {
      author: 'Лев Львов',
      text: `С другой стороны новая модель организационной деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Повседневная практика показывает, что дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития.
		`,
      time: 'Вчера  в 17.30',
      avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
    },
  ],
  myAvatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
};
