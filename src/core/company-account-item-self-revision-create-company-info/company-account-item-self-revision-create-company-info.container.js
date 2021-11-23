import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME } from './company-account-item-self-revision-create-company-info.constant';

import { CompanyAccountItemSelfRevisionCreateCompanyInfoComponent } from './company-account-item-self-revision-create-company-info.component';

import { CompanyAccountItemSelfRevisionCreateCompanyInfoFormValidation } from './company-account-item-self-revision-create-company-info.validation';

import {
  companyAccountItemSelfRevisionChangeCompanyName,
  companyAccountItemSelfRevisionChangeCompanyINN,
  companyAccountItemSelfRevisionChangeCompanyDescription,
  companyAccountItemSelfRevisionChangeFileList,
} from '../company-account-item-self-revision-create';

export function CompanyAccountItemSelfRevisionCreateCompanyInfoContainer({
  companyId,
  company,
}) {
  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION]:
        company.description,
      [COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.FILE_ID_LIST]:
        [],
    };
  };

  return (
    <CompanyAccountItemSelfRevisionCreateCompanyInfoComponent
      companyAccountItemRevisionChangeCompanyName={(value) =>
        companyAccountItemSelfRevisionChangeCompanyName(companyId, value)
      }
      companyAccountItemRevisionChangeCompanyINN={(value) =>
        companyAccountItemSelfRevisionChangeCompanyINN(companyId, value)
      }
      companyAccountItemRevisionChangeCompanyDescription={(value) =>
        companyAccountItemSelfRevisionChangeCompanyDescription(companyId, value)
      }
      companyAccountItemRevisionChangeFileList={(fileList) =>
        companyAccountItemSelfRevisionChangeFileList(companyId, fileList)
      }
      validation={CompanyAccountItemSelfRevisionCreateCompanyInfoFormValidation}
      initialValue={getInitialValue()}
      filedata={company.fileList}
      companyId={companyId}
    />
  );
}
