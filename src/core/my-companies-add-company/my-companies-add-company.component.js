import { PrimaryBox } from '../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../lib/elements/layout';
import { AddCompanyHeaderContainer } from './frame/add-company-header';
import { AddCompanyFormContainer } from './frame/add-company-form';
import { MyCompaniesAddCompanyHeaderContainer } from './frame/my-companies-add-company-header';
import styled from 'styled-components';
import { PrimaryLoader } from '../../lib/elements/loader';

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
            <SectionLayout>
              <AddCompanyHeaderContainer />
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
  width: 100%;
`;
