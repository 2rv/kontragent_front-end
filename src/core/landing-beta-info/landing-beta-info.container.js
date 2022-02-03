import styled from 'styled-components';

import { LandingLayout } from '../../lib/common/landing';
import { LandingBetaInfoDesktopComponent } from './landing-beta-info-desktop.component';
import { LandingBetaInfoMobileComponent } from './landing-beta-info-mobile.component';

export function LandingBetaInfoContainer() {
  return (
    <Layout>
      <Desktop>
        <LandingBetaInfoDesktopComponent graphicData={GRAPHIC_DATA} />
      </Desktop>
      <Mobile>
        <LandingBetaInfoMobileComponent graphicData={GRAPHIC_DATA} />
      </Mobile>
    </Layout>
  );
}

const Layout = styled(LandingLayout)`
  background-color: #fff;
  @media (min-width: 0px) and (max-width: 600px) {
    background-image: url('/static/img/landing/landing-beta-info/background-mobile.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
  }
  @media (min-width: 1366px) {
    background-image: url('/static/img/landing/landing-beta-info/background.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
  }
`;

const Desktop = styled.div`
  position: relative;
  @media (min-width: 0px) and (max-width: 1140px) {
    display: none;
  }
`;

const Mobile = styled.div`
  display: none;
  @media (min-width: 0px) and (max-width: 1140px) {
    display: block;
  }
`;

const GRAPHIC_DATA = [
  {
    date: 'Январь 2022',
    tasks: [
      'Добавление книг',
      'Рейтинг контрагента',
      'Форма обратной связи',
      'Чат с менеджером',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Февраль 2022',
    tasks: [
      'Возможность загрузки книги покупок в личном кабинете',
      'Выставление рейтинга контрагента из книги покупок (заполняем обязательно, Ваша честная оценка очень важна)',
      'Добавление формы обратной связи (жалуемся разработчику на баги и неисправности системы, пишем свои пожелания и замечания). Нам важно знать ваше мнение',
      'Предоставление доступа пользователю к данным ЕГРЮЛ и ЕГРИП по основным критериям добросовестности (отключили все лишнее и оставили самое главное, а в будущем платформа автоматически рассчитает балл надежности по критериям и даст рекомендации)',
      'Включаем скидки до 30% на все услуги платформы до конца февраля 2022',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Март 2022',
    tasks: [
      'Приступаем к созданию собственного чата для текстового и видео общения с возможностью видеоконференций по протоколу MTProto. (При авторизации сервер вас узнает, используется алгоритм RSA. Для сообщений используется другой алгоритм, а именно DH. При помощи данных алгоритмов создаются ключи шифрования и данные шифруются).',
      'Автоматическое выставление счета на пополнение баланса в два клика без использования эквайринг-посредников.',
      'Расширяем функционал платформы за счет ежедневного поступления информации по недобросовестным контрагентам с возможностью получения мгновенного комментария о причинах негатива и их последствиях;',
      'Запуск новостной ленты. Все новости, инсайды, комментарии экспертов, которые не найдете в официальных СМИ, а также комментарий наших пользователей по данному факту.',
      'Запуск реферальной программы пользователя (приглашая на платформу новых пользователей- получаете бонусы, которые можно тратить как внутри системы, так и за ее пределами, 1 бонус=1 рубль)',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
    svgLine: '/static/img/landing/landing-beta-info/graphic-line.svg',
  },
  {
    date: 'Апрель 2022',
    tasks: [
      'Новая опция в личном кабинете- загрузка актов выездной и камеральной проверки по своим и сторонним контрагентам. Оценим риски, предложим варианты, выработаем стратегию.',
      'Книга жалоб. Если контрагента нет в вашей книги, а сообществу важно дать сигнал о надвигающихся налоговых рисках (письма счастья от ИФНС и МВД)- заполняем форму и прикладываем доказательства (реферальный бонус бесконечный- зарабатываем мы, зарабатываете и Вы)',
      'Даем старт по разработке синхронизации с Вашей 1С. В скором времени вновь появившиеся контрагенты в 1С Бухгалтерия отправляются в личный кабинет одним кликом и сразу же анализируются системой.',
      'Новая опция в личном кабинете. Экспресс-оценка контрагента. Платформа даст заключение о целесообразности работы с новым контрагентом, а также расскажет о возможных рисках и последствиях работы с ним.',
      'Push-уведолмения на телефон или планшет- мгновенное информирование о надвигающемся риске.',
    ],
    svgCircle: '/static/img/landing/landing-beta-info/graphic-circle.svg',
    svgCircleMobile:
      '/static/img/landing/landing-beta-info/graphic-circle-mobile.svg',
  },
];
