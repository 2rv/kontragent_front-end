import styled from 'styled-components';

import { HeaderComponent } from './frame/header';
import { ReviewsListComponent } from './frame/reviews-list';

import { REVIEWS_LIST } from './reviews.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ReviewsComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent />
          <ReviewsListComponent reviewsList={REVIEWS_LIST} />
        </SectionLayout>
      </IndentLayout>
    </Container>
  );
}

const Container = styled(PrimaryBox)`
  width: 100%;
  height: fit-content;
`;
