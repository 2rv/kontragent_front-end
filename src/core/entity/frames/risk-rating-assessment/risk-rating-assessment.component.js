import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { RatingComponent } from './frame/rating';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function RiskRatingAssessmentComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent
            title="Рейтинг и оценка рисков"
            companyType="Общество с ограниченной ответственностью"
            companyName={'"Компания Гермес-Электро"'}
          />
          <RatingComponent />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
`;
