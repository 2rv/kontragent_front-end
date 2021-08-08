import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { BasicButton, SecondaryButton } from 'src/lib/elements/button';

export function CompanyInviteNotification(props) {
  const {} = props;

  return (
    <Container>
      <Content>
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOXX_bZQYcwoleLR5AA1ZGhuusgoLUBWU4A&usqp=CAU" />
        <Column>
          <Title>
            Вы получили приглашение в компанию {<BoldText tid="Хогвартс" />} от
            Гарри потера.
          </Title>
          <Time>Вчера, в 15:30</Time>
        </Column>
      </Content>
      <Action>
        {false && (
          <StatusAccepted>
            <StatusTextAccepted tid="Принято" />
          </StatusAccepted>
        )}
        {false && (
          <StatusCanceled>
            <StatusTextCanceled tid="Отклонено" />
          </StatusCanceled>
        )}
        {!false && !false && (
          <>
            <CancelButton tid="Отменить" />
            <AcceptButton tid="Принять" />
          </>
        )}
      </Action>
    </Container>
  );
}

const StatusTextAccepted = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.SUCCESS};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const StatusTextCanceled = styled(PrimaryText)`
  color: ${THEME_COLOR.TEXT.ERROR};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
`;
const StatusAccepted = styled.div`
  border-radius: ${THEME_SIZE.RADIUS.DEFAULT};
  background-color: ${THEME_COLOR.COLOR.SUCCESS};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 46px;
`;
const StatusCanceled = styled(StatusAccepted)`
  background-color: ${THEME_COLOR.COLOR.ERROR};
`;
const CancelButton = styled(BasicButton)`
  background-color: ${THEME_COLOR.COLOR.SECONDARY};
  color: ${THEME_COLOR.TEXT.VALIDATION};
  width: 160px;
`;
const AcceptButton = styled(SecondaryButton)`
  width: 160px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing(3)};
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
`;
const Avatar = styled.img`
  min-width: 40px;
  width: 40px;
  height: 40px;
  border-radius: ${THEME_SIZE.RADIUS.CIRCLE};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Action = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: center;
  flex: 1 0 fit-content;
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  flex: 1 1;
`;
const BoldText = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
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
