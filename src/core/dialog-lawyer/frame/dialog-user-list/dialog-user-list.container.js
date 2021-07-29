import { DialogUserListComponent } from './dialog-user-list.component';

export function DialogUserListContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogLawyersListData,
  } = props;
  return (
    <DialogUserListComponent
      dialogLawyersListData={dialogLawyersListData}
      selectOption={selectOption}
    />
  );
}

export const selectOption = [
  { id: 0, tid: 'DIALOGS.DIALOG_LIST.SELECT_OPTION.0' },
  { id: 1, tid: 'DIALOGS.DIALOG_LIST.SELECT_OPTION.1' },
  { id: 2, tid: 'DIALOGS.DIALOG_LIST.SELECT_OPTION.2' },
];
