import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from 'src/lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import styled from 'styled-components';
import { HeaderContainer as Header } from '../header';
import { ReactComponent as HomePageIcon } from '../../asset/svg/home-page.svg';
import { ReactComponent as ArrowIcon } from '../../asset/svg/button-arrow.svg';
import { PrimaryLink } from 'src/lib/elements/link';
import { BasicButton } from 'src/lib/elements/button';

export function HomeComponent() {
  return (
    <Container>
      <Header />
      <Main>
        <Content>
          <Title tid="Снижаем риск доначисления НДС" />
          <TextPrimary tid="Модуль «НДС+» в системе Контур.Экстерн позволяет снизить риски на каждом этапе работы с НДС" />
          <ListCase>
            <TextSecondary tid="— правильно подготовить декларацию;" />
            <TextSecondary tid="— исключить ошибки и расхождения в СФ;" />
            <TextSecondary tid="— оценить благонадежность контрагентов;" />
            <TextSecondary tid="— быстро ответить на требования ФНС." />
          </ListCase>
          <ActionCase>
            <Button tid="Отправить заявку" />
            <LinkButton>
              <TextLinkButton tid="Попробовать бесплатно" />
              <ArrowIcon />
            </LinkButton>
          </ActionCase>
        </Content>
        <Case>
          <Background>
            <HomeImageCase>
              <HomePageIcon />
            </HomeImageCase>
          </Background>
        </Case>
      </Main>
    </Container>
  );
}
const HomeImageCase = styled.div`
  width: 130%;
  right: 3%;
  position: absolute;
`;
const Button = styled(BasicButton)`
  border-radius: 100px;
  width: 260px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing(4)};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  background: ${THEME_COLOR.COLOR.ACCENT};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  :hover {
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
  }
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.SMALL};
    height: 50px;
    width: 100%;
  } ;
`;
const LinkButton = styled(BasicButton)`
  align-items: center;
  justify-content: center;
  min-width: max-content;
  display: flex;
  gap: 10px;
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.SMALL};
    height: 50px;
    width: 100%;
  } ;
`;
const TextLinkButton = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.ACCENT};
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.SMALL};
  } ;
`;
const ActionCase = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: ${spacing(8)};
  @media screen and (max-width: 720px) {
    gap: ${spacing(3)};
    flex-direction: column;
  } ;
`;
const ListCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  @media screen and (max-width: 720px) {
    gap: ${spacing(4)};
  } ;
`;
const TextSecondary = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.SMALL};
  } ;
`;
const TextCase = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextPrimary = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.SMALL};
  } ;
`;
const Title = styled(PrimaryTitleText)`
  font-size: 48px;
  line-height: 52px;
  @media screen and (max-width: 720px) {
    font-size: ${THEME_SIZE.FONT.HUGE};
    line-height: 1.5;
  } ;
`;
const Background = styled.div`
  display: flex;
  position: relative;
  background: ${THEME_COLOR.COLOR.ACCENT};
  border-radius: 200px 0px 0px 200px;
  align-items: center;
  flex: 1;
`;
const Case = styled.div`
  display: flex;
  width: 600px;
  @media screen and (max-width: 1280px) {
    display: none;
  } ;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing(8)};
  flex: 1;
  padding: 0 150px;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    padding: 0 65px;
  }
  @media screen and (max-width: 720px) {
    padding: 0 ${spacing(4)};
    gap: ${spacing(4)};
  } ;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: ${spacing(15)};
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
