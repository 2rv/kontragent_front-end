import styled from 'styled-components';

import { DialogMessageListItemComponent } from './dialog-message-list-item.component';

import { ReactComponent as LastSeenIcon } from '../../../../asset/svg/last-seen.svg';
import { ReactComponent as FileIcon } from '../../../../asset/svg/file.svg';
import { ReactComponent as SendIcon } from '../../../../asset/svg/send.svg';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { TextareaField } from '../../../../lib/elements/field';
import {
  spacing,
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
} from '../../../../lib/theme';
import { IndentLayout } from '../../../../lib/elements/layout';

export function DialogMessageListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogPersonalMessageListData,
    dialogPersonalCurrentInfo,
  } = props;
  const { name, status, statusId, genderId, lastseen } =
    dialogPersonalCurrentInfo;
  return (
    <Container>
      <Header>
        <Line>
          <FullName>{name}</FullName>
          <Status statusId={statusId}>{status}</Status>
        </Line>
        <Line>
          <SecondaryText
            tid="DIALOGS.DIALOG.LAST_SEEN"
            tvalue={{ was: genderId === 0 ? 'Была' : 'Был', time: lastseen }}
          />
          <LastSeenIcon />
        </Line>
      </Header>
      <Content>
        {dialogPersonalMessageListData.map((data, index) => (
          <DialogMessageListItemComponent key={index} data={data} />
        ))}
      </Content>
      <Footer>
        <Field placeholderTid="Напишите сообщение" />
      </Footer>
    </Container>
  );
}
const Field = styled(TextareaField)`
  height: 56px;
`;

const Container = styled.div`
  background: ${THEME_COLOR.COLOR.BASE};
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
  padding: ${spacing(8)} ${spacing(3.5)} ${spacing(8)} ${spacing(8)};
  min-width: 400px;
  flex-grow: 2;
`;
const Header = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${spacing(4.5)};
`;
const Footer = styled.div`
  height: 56px;
  display: grid;
  padding-right: ${spacing(4.5)};
`;
const ActionCase = styled.div`
  position: absolute;
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
  right: ${spacing(4)};
`;
const Line = styled.div`
  display: flex;
  gap: ${spacing(2)};
  align-items: center;
`;
const FullName = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;
const Status = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.VALIDATION;
      case 2:
        return THEME_COLOR.TEXT.SUCCESS;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  overflow: auto;
  gap: ${spacing(6)};
  padding-right: ${spacing(4)};
`;
