import { ReferralDashboardComponent } from './referral-dashboard.component';

export function ReferralDashboardContainer(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage } = props;
  return (
    <ReferralDashboardComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
    />
  );
}
