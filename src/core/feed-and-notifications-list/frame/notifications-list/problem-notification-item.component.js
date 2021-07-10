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

export function ProblemNotificationItemComponent(props) {
  const {} = props;

  return (
    <Container>
      <ContentCase>
        <AvatarCase>
          <Icon>
            <StarIcon />
          </Icon>
        </AvatarCase>
        <MainCase>
          <HeaderCase>
            <Title>
              Указаны новые проблемы <BoldText tid={`ООО “УМК”`} />: контрагент
              исчез, по нашей информации компания состоит в базе однодневок,
              большой объём просроченной кредиторской задолженности. Компания
              может нести риск доначислений!
            </Title>
          </HeaderCase>
          <Time>Вчера, в 15:30</Time>
        </MainCase>
      </ContentCase>
    </Container>
  );
}
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
`;
const HeaderCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const AvatarCase = styled.div`
  background-color: ${THEME_COLOR.TEXT.ERROR};
  width: 40px;
  height: 40px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const MainCase = styled.div`
  margin-top: ${spacing(1)};
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
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  padding: ${spacing(4)} ${spacing(2)};
  &:hover {
    background-color: ${THEME_COLOR.COLOR.SECONDARY};
  }
`;
const Title = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
const BoldText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
