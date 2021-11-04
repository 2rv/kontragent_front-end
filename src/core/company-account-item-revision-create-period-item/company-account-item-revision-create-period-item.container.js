import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME } from './company-account-item-revision-create-period-item.constant';
import { CompanyAccountItemRevisionCreatePeriodItemComponent } from './company-account-item-revision-create-period-item.component';
import { CompanyAccountItemRevisionCreatePeriodItemFormValidation } from './company-account-item-revision-create-period-item.validation';

import {
  companyAccountItemRevisionCreateDeleteYear,
  companyAccountItemRevisionCreateChangeYear,
  companyAccountItemRevisionCreateChangeYearPeriod,
} from '../company-account-item-revision-create';

export function CompanyAccountItemRevisionCreatePeriodItemContainer({
  companyId,
  yearId,
  period,
  last,
}) {
  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_PERIOD_ITEM_FIELD_NAME.YEAR]:
        period.year,
    };
  };

  return (
    <CompanyAccountItemRevisionCreatePeriodItemComponent
      companyAccountItemRevisionCreateDeleteYear={() =>
        companyAccountItemRevisionCreateDeleteYear(companyId, yearId)
      }
      companyAccountItemRevisionCreateChangeYear={(value) =>
        companyAccountItemRevisionCreateChangeYear(companyId, yearId, value)
      }
      companyAccountItemRevisionCreateChangeYearPeriod={(periods) =>
        companyAccountItemRevisionCreateChangeYearPeriod(
          companyId,
          yearId,
          periods,
        )
      }
      validation={CompanyAccountItemRevisionCreatePeriodItemFormValidation}
      initialValue={getInitialValue()}
      period={period}
      last={last}
      companyId={companyId}
      yearId={yearId}
    />
  );
}
