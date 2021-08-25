import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { AddCompanyFormContainer } from './frame/add-company-form';
import { MyCompaniesAddCompanyHeaderContainer } from './frame/my-companies-add-company-header';
import styled from 'styled-components';
import { PrimaryLoader } from '../../lib/elements/loader';
import { PrimaryTitleText } from '../../lib/elements/text';

export function MyCompaniesAddCompanyComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    validation,
    onSubmitForm,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
  } = props;
  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container type="LARGE">
        <MyCompaniesAddCompanyHeaderContainer />
        <PrimaryBox>
          <IndentLayout>
            <SectionLayout type="LARGE">
              <Title tid="MY_COMPANIES.MY_COMPANIES_ADD_COMPANY.ADD_COMPANY_FORM.HEADER" />
              <AddCompanyFormContainer
                initialValue={initialValue}
                pageLoading={pageLoading}
                isPending={isPending}
                isError={isError}
                isSuccess={isSuccess}
                errorMessage={errorMessage}
                validation={validation}
                onSubmitForm={onSubmitForm}
                fieldName={fieldName}
              />
            </SectionLayout>
          </IndentLayout>
        </PrimaryBox>
      </Container>
    </>
  );
}
const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
`;
const Title = styled(PrimaryTitleText)`
  line-height: 1.5;
`;
