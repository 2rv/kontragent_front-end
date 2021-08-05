import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';

export function HorizontalNewsCardComponent() {
  return (
    <Container>
      <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
      <Content>
        <CardTitle tid="Новая система проверки контрагентов!" />
        <CardText>
          Задача организации, в особенности же консультация с широким активом
          играет важную роль в формировании систем массового участия.
          <CardLink tid="Читать далее " />
        </CardText>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 188px;
  gap: ${spacing(4)};
  overflow: auto;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
const CardText = styled(SecondaryText)`
  line-height: 1.5;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const CardLink = styled(PrimaryLink)`
  font-size: ${THEME_SIZE.FONT.SMALL};
  line-height: 1.5;
`;
const CardImage = styled.img`
  display: flex;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: 100px;
  object-fit: cover;
`;
const CardTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
