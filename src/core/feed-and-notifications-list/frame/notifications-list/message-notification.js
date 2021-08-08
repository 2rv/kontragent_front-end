import styled from 'styled-components';
import { ReactComponent as MoreIcon } from '../../../../asset/svg/more.svg';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { useState } from 'react';
import { Popover } from 'src/lib/elements/modal';
import { PrimaryLink } from 'src/lib/elements/link';
import { SecondaryTextButton, TextButton } from 'src/lib/elements/button';

export function MessageNotification(props) {
  const {} = props;
  const [popover, setPopover] = useState(null);
  const openPopover = (e) => setPopover(e.currentTarget);
  const closePopover = () => setPopover(null);

  return (
    <Content>
      <Avatar src="https://www.psyh.ru/wp-content/uploads/2018/01/6f36b7c998812ad5a43a934e3c81a51f.jpg" />
      <Column>
        <div>
          <Title tid="Новое сообщение от" />
          <ColoredText tid="вашего менеджера " />
          <SecondaryText tid="Илья зинченко ждёт вашего ответа." />
          &nbsp;
          <button onClick={openPopover}>
            <More />
          </button>
        </div>
        <Time tid="3 часа назад" />
        <Popover anchorEl={popover} onClose={closePopover}>
          <Column>
            <SecondaryTextButton tid="Удалить" onClick={closePopover} />
            <SecondaryTextButton tid="Заблокировать" onClick={closePopover} />
            <SecondaryTextButton
              tid="Написать в личные сообщения"
              onClick={closePopover}
            />
          </Column>
        </Popover>
      </Column>
    </Content>
  );
}
const More = styled(MoreIcon)`
  margin-bottom: 15%;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
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
  line-height: 1.5;
`;
const ColoredText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
`;
const Time = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  font-size: ${THEME_SIZE.FONT.TINY};
`;
