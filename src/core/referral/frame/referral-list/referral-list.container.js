import { ReferralListComponent } from './referral-list.component';

export function ReferralListContainer(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    referralList,
  } = props;
  return (
    <ReferralListComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      referralList={referralList}
    />
  );
}
