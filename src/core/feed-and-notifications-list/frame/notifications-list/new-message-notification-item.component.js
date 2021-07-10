import styled from 'styled-components';
import { ReactComponent as DotsIcon } from '../../../../asset/svg/dots-icon.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryDivider } from '../../../../lib/elements/divider';

export function NewMessageNotificationItemComponent(props) {
  const {} = props;

  return (
    <Container>
      <ContentCase>
        <Avatar src="https://www.psyh.ru/wp-content/uploads/2018/01/6f36b7c998812ad5a43a934e3c81a51f.jpg" />
        <MainCase>
          <HeaderCase>
            <Title>
              Новое сообщение от <ColoredText tid="вашего менеджера " />
              <SecondaryText tid="Илья зинченко ждёт вашего ответа." />
            </Title>
            <DotsIcon />
          </HeaderCase>
          <Time tid="3 часа назад" />
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
const Avatar = styled.img`
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
const ColoredText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
