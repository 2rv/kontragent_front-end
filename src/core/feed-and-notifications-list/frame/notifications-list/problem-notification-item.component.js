import styled from 'styled-components';
import { ReactComponent as AttentionIcon } from '../../../../asset/svg/attention.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondaryText } from '../../../../lib/elements/text';

export function ProblemNotificationItemComponent(props) {
  const {} = props;

  return (
    <Content>
      <AvatarCase>
        <AttentionIcon />
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
    </Content>
  );
}

const AvatarCase = styled.div`
  background-color: ${THEME_COLOR.TEXT.ERROR};
  min-width: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const HeaderCase = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
`;
const MainCase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
