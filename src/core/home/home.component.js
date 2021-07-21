import {
  PrimaryText,
  PrimaryTitleText,
  SecondaryText,
} from 'src/lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE, THEME_VALUE } from 'src/lib/theme';
import styled from 'styled-components';
import { HeaderContainer as Header } from '../header';
import { ReactComponent as HomeSVG } from '../../asset/svg/home.svg';
import { PrimaryLink } from 'src/lib/elements/link';
import { PrimaryButton } from 'src/lib/elements/button';
import { ReactComponent as ArrowRight } from '../../asset/svg/arrow-right-icon.svg';

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
              <ArrowRight />
            </LinkButton>
          </ActionCase>
        </Content>
        <Case>
          <Background>
            <HomeSVGCase>
              <HomeSVG />
            </HomeSVGCase>
          </Background>
        </Case>
      </Main>
    </Container>
  );
}

const Button = styled(PrimaryButton)`
  border-radius: 100px;
  width: 260px;
  height: 70px;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  background: linear-gradient(
    160.64deg,
    #2497d8 0%,
    #0098ee 0.01%,
    #54b6ed 100%
  );
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.15);
`;
const LinkButton = styled(PrimaryButton)`
  align-items: center;
  width: max-content;
  display: flex;
  gap: 10px;
  background-color: transparent;
`;
const TextLinkButton = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.ACCENT};
`;
const ActionCase = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

const ListCase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TextSecondary = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
`;
const TextCase = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextPrimary = styled(PrimaryText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
const Title = styled(PrimaryTitleText)`
  font-size: 48px;
  line-height: 52px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing(8)};
  padding-left: 150px;
`;
const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(380px, 550px);
  gap: 100px;
`;
const Background = styled.div`
  display: flex;
  background: linear-gradient(
    160.64deg,
    #2497d8 0%,
    #0098ee 0.01%,
    #54b6ed 100%
  );
  border-radius: 200px 0px 0px 200px;
  align-items: center;
  position: relative;
`;
const Case = styled.div`
  display: grid;
`;
const HomeSVGCase = styled.div`
  position: absolute;
  left: -105px;
  width: 110%;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  width: 100vw;
  height: 100vh;
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
`;
