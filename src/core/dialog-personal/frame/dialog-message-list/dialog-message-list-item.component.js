import styled from 'styled-components';

import { SecondaryText } from '../../../../lib/elements/text';
import { PrimaryBox } from '../../../../lib/elements/box';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';

export function DialogMessageListItemComponent(props) {
  const { img, message } = props.data;
  return (
    <Container my={message?.you}>
      {message?.you && <InfoText tid="DIALOGS.DIALOG.YOUR_MESSAGE" />}
      <Content my={message?.you}>
        <Avatar src={img} />
        <Case>
          <MessageText>{message?.text}</MessageText>
        </Case>
      </Content>
      <InfoText>{message?.date}</InfoText>
    </Container>
  );
}
const Content = styled.div`
  display: grid;
  grid-template-columns: ${({ my = false }) => (my ? '1fr auto' : 'auto 1fr')};
  grid-template-areas: ${({ my = false }) =>
    my ? `'case avatar'` : `'avatar case'`};
  align-items: flex-end;
  gap: ${spacing(2)};
`;
const Container = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
  ${({ my }) => my && 'margin-left: auto;'};
`;
const Avatar = styled.img`
  grid-area: avatar;
  width: 30px;
  height: 30px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Case = styled(PrimaryBox)`
  background: ${THEME_COLOR.COLOR.SECONDARY};
  grid-area: case;
  padding: ${spacing(4)};
  max-width: 300px;
`;
const MessageText = styled(SecondaryText)`
  line-height: 1.5;
`;
const InfoText = styled(SecondaryText)`
  color: ${THEME_COLOR.COLOR.LIGHT_GREY};
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
`;
