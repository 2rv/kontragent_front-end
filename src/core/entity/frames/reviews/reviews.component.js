import styled from 'styled-components';

import { HeaderComponent } from '../header';
import { ReviewsListComponent } from './frame/reviews-list';

import { REVIEWS_LIST } from './reviews.constant';

import { PrimaryBox } from '../../../../lib/elements/box';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';

export function ReviewsComponent() {
  return (
    <Container>
      <IndentLayout>
        <SectionLayout>
          <HeaderComponent
            title="Отзывы"
            companyType="Общество с ограниченной ответственностью"
            companyName={'"Компания Гермес-Электро"'}
          />
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
