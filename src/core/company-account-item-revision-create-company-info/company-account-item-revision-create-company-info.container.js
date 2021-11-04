import { COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME } from './company-account-item-revision-create-company-info.constant';

import { CompanyAccountItemRevisionCreateCompanyInfoComponent } from './company-account-item-revision-create-company-info.component';

import { CompanyAccountItemRevisionCreateCompanyInfoFormValidation } from './company-account-item-revision-create-company-info.validation';

import {
  companyAccountItemRevisionChangeCompanyName,
  companyAccountItemRevisionChangeCompanyINN,
  companyAccountItemRevisionChangeCompanyDescription,
  companyAccountItemRevisionChangeFileList,
} from '../company-account-item-revision-create';

export function CompanyAccountItemRevisionCreateCompanyInfoContainer({
  companyId,
  company,
}) {
  const getInitialValue = () => {
    return {
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.TITLE]:
        company.name,
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION]:
        company.description,
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.INN]:
        company.inn,
      [COMPANY_ACCOUNT_ITEM_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.FILE_ID_LIST]:
        [],
    };
  };

  return (
    <CompanyAccountItemRevisionCreateCompanyInfoComponent
      companyAccountItemRevisionChangeCompanyName={(value) =>
        companyAccountItemRevisionChangeCompanyName(companyId, value)
      }
      companyAccountItemRevisionChangeCompanyINN={(value) =>
        companyAccountItemRevisionChangeCompanyINN(companyId, value)
      }
      companyAccountItemRevisionChangeCompanyDescription={(value) =>
        companyAccountItemRevisionChangeCompanyDescription(companyId, value)
      }
      companyAccountItemRevisionChangeFileList={(fileList) =>
        companyAccountItemRevisionChangeFileList(companyId, fileList)
      }
      validation={CompanyAccountItemRevisionCreateCompanyInfoFormValidation}
      initialValue={getInitialValue()}
      filedata={company.fileList}
      companyId={companyId}
    />
  );
}
