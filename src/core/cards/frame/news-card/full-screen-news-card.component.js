import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';

export function FullScreenNewsCardComponent() {
  return (
    <>
      <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
      <CardShadow />
      <Container>
        <CardTitle tid="Новая система проверки контрагентов!" />
        <CardText>
          Задача организации, в особенности же консультация с широким активом
          играет важную роль в формировании систем массового участия.
        </CardText>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  z-index: 1;
  height: 188px;
  flex-flow: column;
  justify-content: flex-end;
  overflow: auto;
`;
const CardShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
`;
const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100%;
  width: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  object-fit: cover;
`;
const CardTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.BASE};
  line-height: 1.5;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const CardText = styled(SecondaryText)`
  line-height: 1.5;
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
`;
