import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondaryText, PrimaryTitleText } from '../../../../lib/elements/text';

export function AdvertCardComponent() {
  return (
    <>
      <CardImage src="https://bgstaff.ru/upload/bgstaff/pages/startup_programmer.png" />
      <CardShadow />
      <Container>
        <IsAdvertCase>
          <IsAdvertInfo tid="ADVERT.ADVERT_INFO" />
        </IsAdvertCase>
        <CardInfo>
          <CardTitle tid="Личный менеджер в вашем кармане!" />
          <CardText tid="Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить" />
        </CardInfo>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 188px;
  z-index: 1;
`;
const CardShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
`;
const CardImage = styled.img`
  position: absolute;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow: auto;
`;
const IsAdvertCase = styled.div`
  background-color: rgba(37, 37, 37, 0.5);
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  backdrop-filter: blur(25px);
  width: fit-content;
  padding: ${spacing(3)} ${spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IsAdvertInfo = styled(SecondaryText)`
  font-size: ${THEME_SIZE.FONT.TINY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  color: ${THEME_COLOR.TEXT.BASE};
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
