import styled from 'styled-components';
import { ReactComponent as IconFind } from '../../../../asset/svg/find-icon-15x15.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';

export function FindCompleteNotificationItemComponent(props) {
  const {} = props;

  return (
    <Content>
      <AvatarCase>
        <FindIcon />
      </AvatarCase>
      <MainCase>
        <Title tid="Ваш поиск был выполнен!" />
        <Time tid="25 минут назад" />
      </MainCase>
    </Content>
  );
}
const FindIcon = styled(IconFind)`
  fill: ${THEME_COLOR.COLOR.BASE};
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
const AvatarCase = styled.div`
  background-color: ${THEME_COLOR.COLOR.ACCENT};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Title = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  line-height: 21px;
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
