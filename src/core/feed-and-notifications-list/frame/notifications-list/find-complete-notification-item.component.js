import styled from 'styled-components';
import { ReactComponent as IconFind } from '../../../../asset/svg/find-icon-15x15.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryDivider } from '../../../../lib/elements/divider';

export function FindCompleteNotificationItemComponent(props) {
  const {} = props;

  return (
    <Container>
      <ContentCase>
        <AvatarCase>
          <FindIcon />
        </AvatarCase>
        <MainCase>
          <Title tid="Ваш поиск был выполнен!" />
          <Time tid="25 минут назад" />
        </MainCase>
      </ContentCase>
      <PrimaryDivider />
    </Container>
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
const ContentCase = styled.div`
  display: flex;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  display: flex;
  padding: ${spacing(4)} ${spacing(8)};
  transition: 0.2s ease-in;
  min-height: 80px;
  &:hover {
    background-color: ${THEME_COLOR.COLOR.SECONDARY};
  }
`;
const AvatarCase = styled.div`
  background-color: ${THEME_COLOR.COLOR.ACCENT};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
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
