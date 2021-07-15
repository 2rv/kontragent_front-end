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
        <TextareaField placeholderTid="Напишите сообщение">
          <ActionCase>
            <FileIcon />
            <SendIcon />
          </ActionCase>
        </TextareaField>
      </Footer>
    </Container>
  );
}
const Footer = styled.div`
  display: grid;
  height: auto;
  padding-right: ${spacing(6)};
`;

const ActionCase = styled.div`
  position: absolute;
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
  right: ${spacing(4)};
`;
const Container = styled.div`
  background: ${THEME_COLOR.COLOR.BASE};
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-template-rows: auto 1fr auto;
  gap: ${spacing(6)};
  padding: ${spacing(6)} 0 ${spacing(6)} ${spacing(6)};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: ${spacing(6)};
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
  overflow: auto;
  gap: ${spacing(6)};
  padding-right: ${spacing(6)};
`;
