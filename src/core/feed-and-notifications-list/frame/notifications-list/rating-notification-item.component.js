import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../../../asset/svg/star-icon.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryDivider } from '../../../../lib/elements/divider';

export function RatingNotificationItemComponent(props) {
  const {} = props;

  return (
    <Container>
      <ContentCase>
        <AvatarCase>
          <StarIcon />
        </AvatarCase>
        <MainCase>
          <HeaderCase>
            <Title>
              Рейтинг компании <BoldText tid={`ООО "Dobro Motion" `} />
              увеличился до 5
            </Title>
          </HeaderCase>
          <Time>Сегодня, в 11:25</Time>
        </MainCase>
      </ContentCase>
    </Container>
  );
}
const HeaderCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const AvatarCase = styled.div`
  background-color: ${THEME_COLOR.TEXT.WARNING};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const MainCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing(2)};
`;
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  padding: ${spacing(4)} ${spacing(8)};
  &:hover {
    background-color: ${THEME_COLOR.COLOR.SECONDARY};
  }
`;
const Title = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  line-height: 21px;
`;
const BoldText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
