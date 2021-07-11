import styled from 'styled-components';

import { DialogMessagesComponent } from './dialog-messages.component';

import { ReactComponent as LastSeenIcon } from '../../../../asset/svg/last-seen.svg';
import { ReactComponent as File } from '../../../../asset/svg/file.svg';
import { ReactComponent as Send } from '../../../../asset/svg/send.svg';

import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import { PrimaryInput } from '../../../../lib/elements/input';
import {
  spacing,
  THEME_VALUE,
  THEME_COLOR,
  THEME_SIZE,
} from '../../../../lib/theme';

export function DialogComponent(props) {
  const { dialogMessages, dialogInfo } = props;
  const { name, status, statusId, genderId, lastseen } = dialogInfo;
  return (
    <DialogLayout>
      <DialogHeader>
        <div>
          <FullName>{name}</FullName>
          <Status statusId={statusId}>{status}</Status>
        </div>
        <div>
          <SecondaryText
            tid="DIALOGS.DIALOG.LAST_SEEN"
            tvalue={{ was: genderId === 0 ? 'Была' : 'Был', time: lastseen }}
          />
          <LastSeenIcon />
        </div>
      </DialogHeader>
      <div>
        {dialogMessages.map((message) => (
          <DialogMessagesComponent key={message.id} {...message} />
        ))}
        <SendMessageField>
          <PrimaryInput placeholder="Напишите сообщение" />
          <FileIcon />
          <SendIcon />
        </SendMessageField>
      </div>
    </DialogLayout>
  );
}

const DialogLayout = styled.div`
  padding: ${spacing(6)};
  background: ${THEME_COLOR.COLOR.BASE};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    span {
      &:first-child {
        margin-right: ${spacing(2)};
      }
    }
  }
`;

const SendMessageField = styled.div`
  position: relative;
  input {
    width: 100%;
  }
`;

const FileIcon = styled(File)`
  position: absolute;
  right: 45px;
  top: 18px;
  cursor: pointer;
`;

const SendIcon = styled(Send)`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
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
