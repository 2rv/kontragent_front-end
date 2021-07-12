import { DialogsComponent } from './dialogs.component';
import { USERS_DIALOG_LIST, DIALOG_MESSAGES } from './dialogs.constant';
export function DialogsContainer() {
  return (
    <DialogsComponent
      usersDialogList={USERS_DIALOG_LIST}
      dialogMessages={DIALOG_MESSAGES}
      dialogInfo={{
        name: 'Кирилл Тураев',
        status: 'Агент',
        statusId: 1,
        genderId: 1,
        lastseen: 'в 12:50',
      }}
    />
  );
}
