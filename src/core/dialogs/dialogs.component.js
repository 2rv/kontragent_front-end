import styled from 'styled-components';

import { DialogListComponent, DialogComponent } from './frame';

import { USERS_DIALOG_LIST, DIALOG_MESSAGES } from './dialogs.constant';

import { spacing } from '../../lib/theme';

export function DialogsComponent() {
  return (
    <DialogsLayout>
      <DialogListComponent usersDialogList={USERS_DIALOG_LIST} />
      <DialogComponent dialogMessages={DIALOG_MESSAGES} />
    </DialogsLayout>
  );
}

const DialogsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  height: calc(100vh - 95px);
  margin: -${spacing(8)};
`;
