import { MyVerificationHeaderComponent } from './my-verification-header.component';

export function MyVerificationHeaderContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    myVerificationSelectOption,
  } = props;
  return (
    <MyVerificationHeaderComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myVerificationSelectOption={myVerificationSelectOption}
    />
  );
}
