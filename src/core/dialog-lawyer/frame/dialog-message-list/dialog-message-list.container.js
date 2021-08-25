import { DialogMessageListComponent } from './dialog-message-list.component';

export function DialogMessageListContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogLawyerMessageListData,
    dialogLawyerCurrentInfo,
  } = props;
  return (
    <DialogMessageListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      dialogLawyerMessageListData={dialogLawyerMessageListData}
    />
  );
}
