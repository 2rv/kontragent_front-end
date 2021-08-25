import styled from 'styled-components';
import { ReactComponent as StarFull } from '../../../../asset/svg/star.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondaryText } from '../../../../lib/elements/text';

export function RatingNotification(props) {
  const {} = props;

  return (
    <Content>
      <AvatarCase>
        <StarIcon />
      </AvatarCase>
      <Column>
        <HeaderCase>
          <Title>
            Рейтинг компании <BoldText tid={`ООО "Dobro Motion" `} />
            увеличился до 5
          </Title>
        </HeaderCase>
        <Time>Сегодня, в 11:25</Time>
      </Column>
    </Content>
  );
}
const StarIcon = styled(StarFull)`
  fill: ${THEME_COLOR.COLOR.BASE};
`;
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
  min-width: 40px;
  height: 40px;
  flex: 1 0;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
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
