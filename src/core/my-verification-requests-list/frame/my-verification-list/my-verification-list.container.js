import { MyVerificationListComponent } from './my-verification-list.component';

export function MyVerificationListContainer(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    myVerificationListData,
  } = props;
  return (
    <MyVerificationListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myVerificationListData={myVerificationListData}
    />
  );
}
