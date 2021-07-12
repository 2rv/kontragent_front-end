import { DialogListComponent } from './dialog-list.component';
export function DialogListContainer(props) {
  return (
    <DialogListComponent
      usersDialogList={props.usersDialogList}
      SelectOnChange={(E) => console.log(E)}
    />
  );
}
