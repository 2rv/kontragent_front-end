import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryLink } from '../../../../lib/elements/link';

export function VerticalNewsCardComponent() {
  return (
    <Container>
      <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
      <CardInfo>
        <CardTitle tid="Новая система проверки контрагентов!" />
        <CardText>
          Задача организации, в особенности же консультация с широким активом
          играет важную роль в формировании систем массового участия.
          <CardLink tid="Читать далее " />
        </CardText>
      </CardInfo>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 188px;
  gap: ${spacing(4)};
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
  height: 188px;
  max-width: 188px;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
`;

const CardTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  line-height: 1.5;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
