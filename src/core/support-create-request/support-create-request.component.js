import { SupportFormCreateRequestContainer } from './frame/support-form-create-request';
import { SupportCreateRequestHeaderContainer } from './frame/support-create-request-header';
import { SectionLayout, IndentLayout } from '../../lib/elements/layout';
import { PrimaryBox } from '../../lib/elements/box';
import styled from 'styled-components';

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
    <Container>
      <SupportCreateRequestHeaderContainer />
      <PrimaryBox>
        <IndentLayout type="MEDIUM">
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
  );
}
const Container = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
