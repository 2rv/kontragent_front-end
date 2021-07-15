import { HeaderComponent } from './frame/header';
import { CompanySpendingHistoryComponent } from './frame/company-spending-history';

import { COMPANY_SPENDING_HISTORY_LIST } from './balance.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { SectionLayout, IndentLayout } from '../../../../lib/elements/layout';

export function BalanceComponent() {
  return (
    <>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            <HeaderComponent />
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
      <PrimaryBox>
        <IndentLayout>
          <SectionLayout>
            <CompanySpendingHistoryComponent companySpendingHistoryList={COMPANY_SPENDING_HISTORY_LIST} />
          </SectionLayout>
        </IndentLayout>
      </PrimaryBox>
    </>
  );
}
