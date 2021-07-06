import styled from 'styled-components';

import { DialogListComponent, DialogComponent } from './frame';

export function DialogsComponent({ usersDialogList }) {
  return (
    <DialogsLayout>
      <DialogListComponent usersDialogList={usersDialogList} />
      <DialogComponent />
    </DialogsLayout>
  );
}

const DialogsLayout = styled.div`
  display: flex;
`;
