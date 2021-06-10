import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { PrimaryBox } from '../../lib/elements/box';
import { BalanceDepositContainer } from './balance-deposit.container';

export function BalanceDepositPage() {
  return (
    <PageLayout align="CENTER">
      <PrimaryBox>
        <IndentLayout>
          <ContentLayout type="SMALL">
            <BalanceDepositContainer />
          </ContentLayout>
        </IndentLayout>
      </PrimaryBox>
    </PageLayout>
  );
}
