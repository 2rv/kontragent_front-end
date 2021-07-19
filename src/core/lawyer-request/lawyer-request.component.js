import styled from 'styled-components';

import { NewLawyerRequestFormContainer } from './frame/new-lawyer-request-form';

import { PrimaryLoader } from '../../lib/elements/loader';
import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { SectionLayout } from '../../lib/elements/layout';

export function LawyerReqeustComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,
    initialValue,
    onSubmit,
    fieldName,
  } = props;

  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container>
        <SectionLayout type="MEDIUM">
          <LawyerRequestQuestionTitle tid="LAWYER_REQUEST.TITLE" />
          <LawyerRequestQuestionDescription tid="LAWYER_REQUEST.DESCRIPTION" />
        </SectionLayout>
        <NewLawyerRequestFormContainer
          pageLoading={pageLoading}
          isPending={isPending}
          isError={isError}
          isSuccess={isSuccess}
          errorMessage={errorMessage}
          initialValue={initialValue}
          onSubmit={onSubmit}
          fieldName={fieldName}
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  gap: ${spacing(6)};
`;
const LawyerRequestQuestionTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const LawyerRequestQuestionDescription = styled(SecondaryText)`
  line-height: 1.5;
`;
