import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../../../lib/elements/text';

export function AdvertBlockComponent(props) {
  return (
    <Container>
      <CardImage src={'https://i.ytimg.com/vi/G6l368Oa6lk/maxresdefault.jpg'} />
      <CardShadow />
      <Content>
        <IsAdvertCase>
          <IsAdvertInfo tid="ADVERT.ADVERT_INFO" />
        </IsAdvertCase>
        <CardTitle tid="Лушчие проверки контрагентов в мире!" />
      </Content>
    </Container>
  );
}
const CardShadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  top: 0;
  left: 0;
  background: linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 50.17%);
`;
const CardImage = styled.img`
  position: absolute;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  height: 100%;
  width: 100%;
  z-index: 0;
  top: 0;
  left: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  z-index: 1;
  justify-content: space-between;
`;
const CardTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.MEDIUM};
  color: ${THEME_COLOR.TEXT.BASE};
  line-height: 1.5;
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
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
