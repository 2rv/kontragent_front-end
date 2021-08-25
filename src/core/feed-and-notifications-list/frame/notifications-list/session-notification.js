import styled from 'styled-components';
import { ReactComponent as AttentionIcon } from '../../../../asset/svg/attention.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondaryText } from '../../../../lib/elements/text';

export function SessionNotification(props) {
  const {} = props;

  return (
    <Content>
      <AvatarCase>
        <AttentionIcon />
      </AvatarCase>
      <Column>
        <div>
          <Title tid="Новая сессия с неизвестного устройства!" />
          &nbsp;
          <ColoredText tid="Это вы?" />
        </div>
        <Time>Вчера, в 15:30</Time>
      </Column>
    </Content>
  );
}

const AvatarCase = styled.div`
  background-color: ${THEME_COLOR.TEXT.WARNING};
  min-width: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const ColoredText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.ACCENT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
  line-height: 1.5;
`;
const Title = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
  line-height: 1.5;
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
