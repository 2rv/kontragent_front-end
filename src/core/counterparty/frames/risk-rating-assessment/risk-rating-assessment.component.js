import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { RatingComponent } from './frame/rating';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function RiskRatingAssessmentComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout type="LARGE">
          <HeaderComponent
            title="COUNTERPARTY.RISK_RATING_ASSESSMENT.HEADER.TITLE"
            companyType="COUNTERPARTY.RISK_RATING_ASSESSMENT.HEADER.COMPANY_TYPE"
            companyName={'"Компания Гермес-Электро"'}
          />
          <RatingComponent />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  display: flex;
`;
