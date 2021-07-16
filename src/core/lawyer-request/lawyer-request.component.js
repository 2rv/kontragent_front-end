import styled from 'styled-components';

import { NewLawyerRequestFormContainer } from './frame/new-lawyer-request-form';

import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';
import { SectionLayout } from '../../lib/elements/layout';

export function LawyerReqeustComponent(props) {
  return (
    <Container>
      <SectionLayout type="MEDIUM">
        <LawyerRequestQuestionTitle tid="LAWYER_REQUEST.TITLE" />
        <LawyerRequestQuestionDescription tid="LAWYER_REQUEST.DESCRIPTION" />
      </SectionLayout>
      <NewLawyerRequestFormContainer {...props} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`;

const LawyerRequestQuestionTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  line-height: 1.5;
`;

const LawyerRequestQuestionDescription = styled(SecondaryText)`
  line-height: 1.5;
`;
