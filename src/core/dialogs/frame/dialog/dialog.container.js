import { DialogComponent } from './dialog.component';
export function DialogContainer(props) {
  const { dialogInfo, dialogMessages } = props;
  return (
    <DialogComponent dialogInfo={dialogInfo} dialogMessages={dialogMessages} />
  );
}
