import { SupportFormCreateRequestContainer } from './frame/support-form-create-request';
import { SupportCreateRequestHeaderContainer } from './frame/support-create-request-header';
import { SectionLayout, IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import styled from 'styled-components';
import { PrimaryLoader } from '../../lib/elements/loader';

export function SupportCreateRequestComponent(props) {
  const {
    initialValue,
    pageLoading,
    isPending,
    fieldName,
    isError,
    isSuccess,
    errorMessage,
    problemCategory,
    validation,
    onSubmitForm,
  } = props;

  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container type="LARGE">
        <SupportCreateRequestHeaderContainer />
        <PrimaryBox>
          <IndentLayout>
            <SupportFormCreateRequestContainer
              initialValue={initialValue}
              pageLoading={pageLoading}
              isPending={isPending}
              isError={isError}
              isSuccess={isSuccess}
              errorMessage={errorMessage}
              fieldName={fieldName}
              problemCategory={problemCategory}
              validation={validation}
              onSubmitForm={onSubmitForm}
            />
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
