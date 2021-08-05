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
    <Container>
      <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
      <CardShadow />
      <CardInfo>
        <CardTitle tid="Новая система проверки контрагентов!" />
        <CardText>
          Задача организации, в особенности же консультация с широким активом
          играет важную роль в формировании систем массового участия.
        </CardText>
      </CardInfo>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  width: 100%;
  height: 188px;
  gap: ${spacing(4)};
`;
const CardShadow = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const CardImage = styled.img`
  position: absolute;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: 220px;
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0;
`;
const CardInfo = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
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
