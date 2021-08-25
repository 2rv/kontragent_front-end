import { DialogMessageListComponent } from './dialog-message-list.component';

export function DialogMessageListContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogPersonalMessageListData,
    dialogPersonalCurrentInfo,
  } = props;
  return (
    <DialogMessageListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      dialogPersonalCurrentInfo={dialogPersonalCurrentInfo}
      dialogPersonalMessageListData={dialogPersonalMessageListData}
    />
  );
}
