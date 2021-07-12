import styled from 'styled-components';
import { DialogListContainer, DialogContainer } from './frame';

export function DialogsComponent(props) {
  const { usersDialogList, dialogMessages, dialogInfo } = props;
  return (
    <DialogsLayout>
      <DialogListContainer usersDialogList={usersDialogList} />
      <DialogContainer
        dialogInfo={dialogInfo}
        dialogMessages={dialogMessages}
      />
    </DialogsLayout>
  );
}

const DialogsLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(450px, 1fr) minmax(400px, 1.8fr);
`;
