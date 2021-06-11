import { ContentLayout, SectionLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import { DashboardLayout } from '../../lib/common/dashboard';
import { LoginContainer } from '../../core/login/login.container';

export default function BalanceDepositPage() {
  return (
    <DashboardLayout>
      <ContentLayout type="SMALL">
        <SectionLayout>
          <PrimaryBox>
            <LoginContainer />
          </PrimaryBox>
          <PrimaryBox>
            <SectionLayout>
              <LoginContainer />
              <LoginContainer />
            </SectionLayout>
          </PrimaryBox>
        </SectionLayout>
      </ContentLayout>
    </DashboardLayout>
  );
}
