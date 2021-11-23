import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME } from './company-account-item-self-revision-create-period-item.constant';
import { CompanyAccountItemSelfRevisionCreatePeriodItemComponent } from './company-account-item-self-revision-create-period-item.component';
import { CompanyAccountItemSelfRevisionCreatePeriodItemFormValidation } from './company-account-item-self-revision-create-period-item.validation';

import {
  companyAccountItemSelfRevisionCreateDeleteYear,
  companyAccountItemSelfRevisionCreateChangeYear,
  companyAccountItemSelfRevisionCreateChangeYearPeriod,
} from '../company-account-item-self-revision-create';

export function CompanyAccountItemSelfRevisionCreatePeriodItemContainer({
  companyId,
  yearId,
  period,
  last,
}) {
  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR]:
        period.year,
    };
  };

  return (
    <CompanyAccountItemSelfRevisionCreatePeriodItemComponent
      companyAccountItemRevisionCreateDeleteYear={() =>
        companyAccountItemSelfRevisionCreateDeleteYear(companyId, yearId)
      }
      companyAccountItemRevisionCreateChangeYear={(value) =>
        companyAccountItemSelfRevisionCreateChangeYear(companyId, yearId, value)
      }
      companyAccountItemRevisionCreateChangeYearPeriod={(periods) =>
        companyAccountItemSelfRevisionCreateChangeYearPeriod(
          companyId,
          yearId,
          periods,
        )
      }
      validation={CompanyAccountItemSelfRevisionCreatePeriodItemFormValidation}
      initialValue={getInitialValue()}
      period={period}
      last={last}
      companyId={companyId}
      yearId={yearId}
    />
  );
}
